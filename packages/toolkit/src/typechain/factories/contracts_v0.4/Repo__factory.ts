/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { ethers } from "ethers";
import type {
  Signer,
  ContractTransactionResponse,
  ContractDeployTransaction,
  ContractRunner,
} from "ethers";
import type { NonPayableOverrides } from "../../common.js";
import type { Repo, RepoInterface } from "../../contracts_v0.4/Repo.js";

const _abi = [
  {
    constant: true,
    inputs: [],
    name: "EVMSCRIPT_REGISTRY_APP_ID",
    outputs: [
      {
        name: "",
        type: "bytes32",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "appId",
    outputs: [
      {
        name: "",
        type: "bytes32",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "getInitializationBlock",
    outputs: [
      {
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "EVMSCRIPT_REGISTRY_APP",
    outputs: [
      {
        name: "",
        type: "bytes32",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        name: "_sender",
        type: "address",
      },
      {
        name: "_role",
        type: "bytes32",
      },
      {
        name: "params",
        type: "uint256[]",
      },
    ],
    name: "canPerform",
    outputs: [
      {
        name: "",
        type: "bool",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "CREATE_VERSION_ROLE",
    outputs: [
      {
        name: "",
        type: "bytes32",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "kernel",
    outputs: [
      {
        name: "",
        type: "address",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        name: "_script",
        type: "bytes",
      },
    ],
    name: "getExecutor",
    outputs: [
      {
        name: "",
        type: "address",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        name: "versionId",
        type: "uint256",
      },
      {
        indexed: false,
        name: "semanticVersion",
        type: "uint16[3]",
      },
    ],
    name: "NewVersion",
    type: "event",
  },
  {
    constant: false,
    inputs: [
      {
        name: "_newSemanticVersion",
        type: "uint16[3]",
      },
      {
        name: "_contractAddress",
        type: "address",
      },
      {
        name: "_contentURI",
        type: "bytes",
      },
    ],
    name: "newVersion",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "getLatest",
    outputs: [
      {
        name: "semanticVersion",
        type: "uint16[3]",
      },
      {
        name: "contractAddress",
        type: "address",
      },
      {
        name: "contentURI",
        type: "bytes",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        name: "_contractAddress",
        type: "address",
      },
    ],
    name: "getLatestForContractAddress",
    outputs: [
      {
        name: "semanticVersion",
        type: "uint16[3]",
      },
      {
        name: "contractAddress",
        type: "address",
      },
      {
        name: "contentURI",
        type: "bytes",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        name: "_semanticVersion",
        type: "uint16[3]",
      },
    ],
    name: "getBySemanticVersion",
    outputs: [
      {
        name: "semanticVersion",
        type: "uint16[3]",
      },
      {
        name: "contractAddress",
        type: "address",
      },
      {
        name: "contentURI",
        type: "bytes",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        name: "_versionId",
        type: "uint256",
      },
    ],
    name: "getByVersionId",
    outputs: [
      {
        name: "semanticVersion",
        type: "uint16[3]",
      },
      {
        name: "contractAddress",
        type: "address",
      },
      {
        name: "contentURI",
        type: "bytes",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "getVersionsCount",
    outputs: [
      {
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        name: "_oldVersion",
        type: "uint16[3]",
      },
      {
        name: "_newVersion",
        type: "uint16[3]",
      },
    ],
    name: "isValidBump",
    outputs: [
      {
        name: "",
        type: "bool",
      },
    ],
    payable: false,
    stateMutability: "pure",
    type: "function",
  },
] as const;

const _bytecode =
  "0x6060604052341561000f57600080fd5b6110cb8061001e6000396000f3006060604052600436106100c15763ffffffff60e060020a6000350416634c3ba26881146100c657806360b1e057146101b957806373053410146101de578063737e7d4f1461026757806380afdea81461027d5780638b3dd749146102905780639a6fe50c146102a35780639b3fdf4c146102c2578063a1658fad146102d5578063a7bdf16e1461034c578063aa61924a146103ad578063c36af460146103c0578063c6d48e0d146103d3578063d4aae0c4146103e6578063f92a79ff14610415575b600080fd5b34156100d157600080fd5b6100ff6004606481600360606040519081016040529190828260608082843750939550610466945050505050565b6040518084606080838360005b8381101561012457808201518382015260200161010c565b5050505090500183600160a060020a0316600160a060020a0316815260200180602001828103825283818151815260200191508051906020019080838360005b8381101561017c578082015183820152602001610164565b50505050905090810190601f1680156101a95780820380516001836020036101000a031916815260200191505b5094505050505060405180910390f35b34156101c457600080fd5b6101cc6104ab565b60405190815260200160405180910390f35b34156101e957600080fd5b61026560046064816003606060405190810160405291908282606080828437509395600160a060020a038635169590945060408082019450602091820135860180830194503592508291601f8301819004810201905190810160405281815292919060208401838380828437509496506104df95505050505050565b005b341561027257600080fd5b6100ff60043561079d565b341561028857600080fd5b6101cc6108ff565b341561029b57600080fd5b6101cc610905565b34156102ae57600080fd5b6100ff600160a060020a036004351661090c565b34156102cd57600080fd5b6101cc610940565b34156102e057600080fd5b61033860048035600160a060020a03169060248035919060649060443590810190830135806020808202016040519081016040528093929190818152602001838360200280828437509496506109bc95505050505050565b604051901515815260200160405180910390f35b341561035757600080fd5b610338600460648160036060604051908101604052919082826060808284378201915050505050919080606001906003806020026040519081016040529190828260608082843750939550610afa945050505050565b34156103b857600080fd5b6101cc610be9565b34156103cb57600080fd5b6100ff610bee565b34156103de57600080fd5b6101cc610c1b565b34156103f157600080fd5b6103f9610c3b565b604051600160a060020a03909116815260200160405180910390f35b341561042057600080fd5b6103f960046024813581810190830135806020601f82018190048102016040519081016040528181529291906020840183838082843750949650610c4a95505050505050565b61046e610e51565b6000610478610e79565b61049e6065600061048887610d26565b815260208101919091526040016000205461079d565b9250925092509193909250565b6040517f65766d7265672e617261676f6e706d2e657468000000000000000000000000008152601301604051809103902081565b6000806104ea610e51565b600060016105173382846040518059106105015750595b90808252806020026020018201604052506109bc565b151561052257600080fd5b606454879550600090111561061a5760648054600019810190811061054357fe5b906000526020600020906003020193506105b784600001600380602002604051908101604052919060608301826000855b82829054906101000a900461ffff1661ffff1681526020019060020190602082600101049283019260010382029150808411610574579050505050505089610afa565b15156105c257600080fd5b600160a060020a03851615156105e3576001840154600160a060020a031694505b6001840154600160a060020a038681169116148061060a5750835461ffff16885161ffff16115b151561061557600080fd5b610642565b606480546001019061062c9082610e8b565b506106378389610afa565b151561064257600080fd5b6001606480548060010182816106589190610e8b565b91600052602060002090600302016000606060405190810160409081528d8252600160a060020a038b16602083015281018b9052919050815161069e9082906003610ebc565b50602082015160018201805473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a03929092169190911790556040820151816002019080516106ed929160200190610f4e565b50505003915081606560006107018b610d26565b81526020808201929092526040908101600090812093909355600160a060020a03881683526066909152908190208390557e3aea8189d1a0aa3ebdb05219cd4c2a663166706e949e9d6e8aa63718ca43fd9083908a90518281526020810182606080838360005b83811015610780578082015183820152602001610768565b505050509050019250505060405180910390a15050505050505050565b6107a5610e51565b60006107af610e79565b60008085116107bd57600080fd5b60648054869081106107cb57fe5b90600052602060002090600302019050806000018160010160009054906101000a9004600160a060020a03168260020182600380602002604051908101604052919060608301826000855b82829054906101000a900461ffff1661ffff168152602001906002019060208260010104928301926001038202915080841161081657905050505050509250808054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156108ea5780601f106108bf576101008083540402835291602001916108ea565b820191906000526020600020905b8154815290600101906020018083116108cd57829003601f168201915b50505050509050935093509350509193909250565b60015481565b6003545b90565b610914610e51565b600061091e610e79565b600160a060020a03841660009081526066602052604090205461049e9061079d565b6040517f6170700000000000000000000000000000000000000000000000000000000000815260030160405180910390206040517f65766d7265672e617261676f6e706d2e6574680000000000000000000000000081526013016040518091039020604051918252602082015260409081019051809103902081565b60006109c6610e79565b600080845111156109df57835160200290508391508082525b600054600160a060020a03161580610af0575060008054600160a060020a03169063fdef91069088903090899087906040516020015260405160e060020a63ffffffff8716028152600160a060020a0380861660048301908152908516602483015260448201849052608060648301908152909160840183818151815260200191508051906020019080838360005b83811015610a86578082015183820152602001610a6e565b50505050905090810190601f168015610ab35780820380516001836020036101000a031916815260200191505b5095505050505050602060405180830381600087803b1515610ad457600080fd5b6102c65a03f11515610ae557600080fd5b505050604051805190505b9695505050505050565b600080805b6003811015610bdd578115610b3657838160038110610b1a57fe5b602002015161ffff1615610b315760009250610be1565b610bd5565b848160038110610b4257fe5b602002015161ffff16848260038110610b5757fe5b602002015161ffff1614610bd557838160038110610b7157fe5b602002015161ffff16858260038110610b8657fe5b602002015161ffff161180610bc25750848160038110610ba257fe5b6020020151848260038110610bb357fe5b60200201510361ffff16600114155b15610bd05760009250610be1565b600191505b600101610aff565b8192505b505092915050565b600181565b610bf6610e51565b6000610c00610e79565b606454610c10906000190161079d565b925092509250909192565b606454600090818111610c2f576000610c34565b600181035b91505b5090565b600054600160a060020a031681565b6000610c54610d85565b600160a060020a03166304bf2a7f836000604051602001526040518263ffffffff1660e060020a0281526004018080602001828103825283818151815260200191508051906020019080838360005b83811015610cbb578082015183820152602001610ca3565b50505050905090810190601f168015610ce85780820380516001836020036101000a031916815260200191505b5092505050602060405180830381600087803b1515610d0657600080fd5b6102c65a03f11515610d1757600080fd5b50505060405180519392505050565b60008151602083015160408401516040517e0100000000000000000000000000000000000000000000000000000000000061ffff9485168102825292841683026002820152921602600482015260060160405180910390209050919050565b600080548190600160a060020a03166342c71f1d6040517f6170700000000000000000000000000000000000000000000000000000000000815260030160405180910390206040517f65766d7265672e617261676f6e706d2e6574680000000000000000000000000081526013016040518091039020604051918252602082015260409081019051809103902060006040516020015260405160e060020a63ffffffff84160281526004810191909152602401602060405180830381600087803b1515610d0657600080fd5b60606040519081016040526003815b600081526000199091019060200181610e605790505090565b60206040519081016040526000815290565b815481835581811511610eb757600302816003028360005260206000209182019101610eb79190610fc8565b505050565b600183019183908215610f425791602002820160005b83821115610f1257835183826101000a81548161ffff021916908361ffff1602179055509260200192600201602081600101049283019260010302610ed2565b8015610f405782816101000a81549061ffff0219169055600201602081600101049283019260010302610f12565b505b50610c37929150611018565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f10610f8f57805160ff1916838001178555610fbc565b82800160010185558215610fbc579182015b82811115610fbc578251825591602001919060010190610fa1565b50610c37929150611037565b61090991905b80821115610c37576000610fe28282611051565b60018201805473ffffffffffffffffffffffffffffffffffffffff1916905561100f600283016000611058565b50600301610fce565b61090991905b80821115610c3757805461ffff1916815560010161101e565b61090991905b80821115610c37576000815560010161103d565b5060009055565b50805460018160011615610100020316600290046000825580601f1061107e575061109c565b601f01602090049060005260206000209081019061109c9190611037565b505600a165627a7a72305820ef13e97f7383feb4ca00ea0b60cf47dbcd80a867c43dc82baf45a9cd96eafcd60029";

type RepoConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ethers.ContractFactory>;

const isSuperArgs = (
  xs: RepoConstructorParams
): xs is ConstructorParameters<typeof ethers.ContractFactory> => xs.length > 1;

export class Repo__factory extends ethers.ContractFactory {
  constructor(...args: RepoConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(overrides || {});
  }
  override deploy(overrides?: NonPayableOverrides & { from?: string }) {
    return super.deploy(overrides || {}) as Promise<
      Repo & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): Repo__factory {
    return super.connect(runner) as Repo__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): RepoInterface {
    return new ethers.Interface(_abi) as RepoInterface;
  }
  static connect(address: string, runner?: ContractRunner | null): Repo {
    return new ethers.Contract(address, _abi, runner) as unknown as Repo;
  }
}