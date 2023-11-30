/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumberish,
  BytesLike,
  FunctionFragment,
  Result,
  Interface,
  EventFragment,
  AddressLike,
  ContractRunner,
  ContractMethod,
  Listener,
} from "ethers";
import type {
  TypedContractEvent,
  TypedDeferredTopicFilter,
  TypedEventLog,
  TypedLogDescription,
  TypedListener,
  TypedContractMethod,
} from "../common.js";

export interface RepoInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "EVMSCRIPT_REGISTRY_APP_ID"
      | "appId"
      | "getInitializationBlock"
      | "EVMSCRIPT_REGISTRY_APP"
      | "canPerform"
      | "CREATE_VERSION_ROLE"
      | "kernel"
      | "getExecutor"
      | "newVersion"
      | "getLatest"
      | "getLatestForContractAddress"
      | "getBySemanticVersion"
      | "getByVersionId"
      | "getVersionsCount"
      | "isValidBump"
  ): FunctionFragment;

  getEvent(nameOrSignatureOrTopic: "NewVersion"): EventFragment;

  encodeFunctionData(
    functionFragment: "EVMSCRIPT_REGISTRY_APP_ID",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "appId", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "getInitializationBlock",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "EVMSCRIPT_REGISTRY_APP",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "canPerform",
    values: [AddressLike, BytesLike, BigNumberish[]]
  ): string;
  encodeFunctionData(
    functionFragment: "CREATE_VERSION_ROLE",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "kernel", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "getExecutor",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "newVersion",
    values: [[BigNumberish, BigNumberish, BigNumberish], AddressLike, BytesLike]
  ): string;
  encodeFunctionData(functionFragment: "getLatest", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "getLatestForContractAddress",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "getBySemanticVersion",
    values: [[BigNumberish, BigNumberish, BigNumberish]]
  ): string;
  encodeFunctionData(
    functionFragment: "getByVersionId",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getVersionsCount",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "isValidBump",
    values: [
      [BigNumberish, BigNumberish, BigNumberish],
      [BigNumberish, BigNumberish, BigNumberish]
    ]
  ): string;

  decodeFunctionResult(
    functionFragment: "EVMSCRIPT_REGISTRY_APP_ID",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "appId", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getInitializationBlock",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "EVMSCRIPT_REGISTRY_APP",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "canPerform", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "CREATE_VERSION_ROLE",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "kernel", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getExecutor",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "newVersion", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "getLatest", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getLatestForContractAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getBySemanticVersion",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getByVersionId",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getVersionsCount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isValidBump",
    data: BytesLike
  ): Result;
}

export namespace NewVersionEvent {
  export type InputTuple = [
    versionId: BigNumberish,
    semanticVersion: [BigNumberish, BigNumberish, BigNumberish]
  ];
  export type OutputTuple = [
    versionId: bigint,
    semanticVersion: [bigint, bigint, bigint]
  ];
  export interface OutputObject {
    versionId: bigint;
    semanticVersion: [bigint, bigint, bigint];
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface Repo extends BaseContract {
  connect(runner?: ContractRunner | null): Repo;
  waitForDeployment(): Promise<this>;

  interface: RepoInterface;

  queryFilter<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;
  queryFilter<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;

  on<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  on<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  once<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  once<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  listeners<TCEvent extends TypedContractEvent>(
    event: TCEvent
  ): Promise<Array<TypedListener<TCEvent>>>;
  listeners(eventName?: string): Promise<Array<Listener>>;
  removeAllListeners<TCEvent extends TypedContractEvent>(
    event?: TCEvent
  ): Promise<this>;

  EVMSCRIPT_REGISTRY_APP_ID: TypedContractMethod<[], [string], "view">;

  appId: TypedContractMethod<[], [string], "view">;

  /**
   * @returns Block number in which the contract was initialized
   */
  getInitializationBlock: TypedContractMethod<[], [bigint], "view">;

  EVMSCRIPT_REGISTRY_APP: TypedContractMethod<[], [string], "view">;

  canPerform: TypedContractMethod<
    [_sender: AddressLike, _role: BytesLike, params: BigNumberish[]],
    [boolean],
    "view"
  >;

  CREATE_VERSION_ROLE: TypedContractMethod<[], [string], "view">;

  kernel: TypedContractMethod<[], [string], "view">;

  getExecutor: TypedContractMethod<[_script: BytesLike], [string], "view">;

  /**
   * Create new version for repo
   * @param _contentURI External URI for fetching new version's content
   * @param _contractAddress address for smart contract logic for version (if set to 0, it uses last versions' contractAddress)
   * @param _newSemanticVersion Semantic version for new repo version
   */
  newVersion: TypedContractMethod<
    [
      _newSemanticVersion: [BigNumberish, BigNumberish, BigNumberish],
      _contractAddress: AddressLike,
      _contentURI: BytesLike
    ],
    [void],
    "nonpayable"
  >;

  getLatest: TypedContractMethod<
    [],
    [
      [[bigint, bigint, bigint], string, string] & {
        semanticVersion: [bigint, bigint, bigint];
        contractAddress: string;
        contentURI: string;
      }
    ],
    "view"
  >;

  getLatestForContractAddress: TypedContractMethod<
    [_contractAddress: AddressLike],
    [
      [[bigint, bigint, bigint], string, string] & {
        semanticVersion: [bigint, bigint, bigint];
        contractAddress: string;
        contentURI: string;
      }
    ],
    "view"
  >;

  getBySemanticVersion: TypedContractMethod<
    [_semanticVersion: [BigNumberish, BigNumberish, BigNumberish]],
    [
      [[bigint, bigint, bigint], string, string] & {
        semanticVersion: [bigint, bigint, bigint];
        contractAddress: string;
        contentURI: string;
      }
    ],
    "view"
  >;

  getByVersionId: TypedContractMethod<
    [_versionId: BigNumberish],
    [
      [[bigint, bigint, bigint], string, string] & {
        semanticVersion: [bigint, bigint, bigint];
        contractAddress: string;
        contentURI: string;
      }
    ],
    "view"
  >;

  getVersionsCount: TypedContractMethod<[], [bigint], "view">;

  isValidBump: TypedContractMethod<
    [
      _oldVersion: [BigNumberish, BigNumberish, BigNumberish],
      _newVersion: [BigNumberish, BigNumberish, BigNumberish]
    ],
    [boolean],
    "view"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "EVMSCRIPT_REGISTRY_APP_ID"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "appId"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "getInitializationBlock"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "EVMSCRIPT_REGISTRY_APP"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "canPerform"
  ): TypedContractMethod<
    [_sender: AddressLike, _role: BytesLike, params: BigNumberish[]],
    [boolean],
    "view"
  >;
  getFunction(
    nameOrSignature: "CREATE_VERSION_ROLE"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "kernel"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "getExecutor"
  ): TypedContractMethod<[_script: BytesLike], [string], "view">;
  getFunction(
    nameOrSignature: "newVersion"
  ): TypedContractMethod<
    [
      _newSemanticVersion: [BigNumberish, BigNumberish, BigNumberish],
      _contractAddress: AddressLike,
      _contentURI: BytesLike
    ],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "getLatest"
  ): TypedContractMethod<
    [],
    [
      [[bigint, bigint, bigint], string, string] & {
        semanticVersion: [bigint, bigint, bigint];
        contractAddress: string;
        contentURI: string;
      }
    ],
    "view"
  >;
  getFunction(
    nameOrSignature: "getLatestForContractAddress"
  ): TypedContractMethod<
    [_contractAddress: AddressLike],
    [
      [[bigint, bigint, bigint], string, string] & {
        semanticVersion: [bigint, bigint, bigint];
        contractAddress: string;
        contentURI: string;
      }
    ],
    "view"
  >;
  getFunction(
    nameOrSignature: "getBySemanticVersion"
  ): TypedContractMethod<
    [_semanticVersion: [BigNumberish, BigNumberish, BigNumberish]],
    [
      [[bigint, bigint, bigint], string, string] & {
        semanticVersion: [bigint, bigint, bigint];
        contractAddress: string;
        contentURI: string;
      }
    ],
    "view"
  >;
  getFunction(
    nameOrSignature: "getByVersionId"
  ): TypedContractMethod<
    [_versionId: BigNumberish],
    [
      [[bigint, bigint, bigint], string, string] & {
        semanticVersion: [bigint, bigint, bigint];
        contractAddress: string;
        contentURI: string;
      }
    ],
    "view"
  >;
  getFunction(
    nameOrSignature: "getVersionsCount"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "isValidBump"
  ): TypedContractMethod<
    [
      _oldVersion: [BigNumberish, BigNumberish, BigNumberish],
      _newVersion: [BigNumberish, BigNumberish, BigNumberish]
    ],
    [boolean],
    "view"
  >;

  getEvent(
    key: "NewVersion"
  ): TypedContractEvent<
    NewVersionEvent.InputTuple,
    NewVersionEvent.OutputTuple,
    NewVersionEvent.OutputObject
  >;

  filters: {
    "NewVersion(uint256,uint16[3])": TypedContractEvent<
      NewVersionEvent.InputTuple,
      NewVersionEvent.OutputTuple,
      NewVersionEvent.OutputObject
    >;
    NewVersion: TypedContractEvent<
      NewVersionEvent.InputTuple,
      NewVersionEvent.OutputTuple,
      NewVersionEvent.OutputObject
    >;
  };
}
