const fs = require('fs');
const getPath = require('utils/getPath');
const shellSync = require('utils/shell');
const parse = require('utils/parse');
const logUI = require('utils/logUI');
const paramsDefault = require('params');
const dockerDefault = require('modules/docker');

// CALL DOCUMENTATION:
// > kwargs: {
//     id,
//     deleteVolumes,
//     logId
//   }
// > result: empty = {}

function createRemovePackage({
  params = paramsDefault,
  docker = dockerDefault,
}) {
  const removePackage = async ({
    id,
    deleteVolumes = false,
    logId,
  }) => {
    const packageRepoDir = getPath.packageRepoDir(id, params);

    const dockerComposePath = getPath.dockerComposeSmart(id, params);
    if (!fs.existsSync(dockerComposePath)) {
      throw Error('No docker-compose found: ' + dockerComposePath);
    }

    if (id.includes('dappmanager.dnp.dappnode.eth')) {
      throw Error('The installer cannot be restarted');
    }

    // Close ports
    logUI({logId, pkg: 'all', msg: 'closing ports...'});
    try {
      await closePorts(dockerComposePath, docker);
    } catch (e) {
      logUI({logId, pkg: 'all', msg: 'Error closing ports '+(e ? e.message : '')});
    }


    // Remove container (and) volumes
    logUI({logId, pkg: 'all', msg: 'Shutting down containers...'});
    await docker.compose.down(dockerComposePath, {volumes: Boolean(deleteVolumes)});
    // Remove DNP folder and files
    logUI({logId, pkg: 'all', msg: 'Removing system files...'});
    await shellSync('rm -r ' + packageRepoDir);

    return {
      message: 'Removed package: ' + id,
      log: true,
    };
  };

  // Expose main method
  return removePackage;
}

async function closePorts(dockerComposePath, docker) {
  const ports = parse.dockerComposePorts(dockerComposePath);
  for (const port of ports) {
    await docker.closePort(port);
  }
}


module.exports = createRemovePackage;