/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import type BN from "bn.js";
import type { ContractOptions } from "web3-eth-contract";
import type { EventLog } from "web3-core";
import type { EventEmitter } from "events";
import type {
  Callback,
  PayableTransactionObject,
  NonPayableTransactionObject,
  BlockType,
  ContractEventLog,
  BaseContract,
} from "./types";

export interface EventOptions {
  filter?: object;
  fromBlock?: BlockType;
  topics?: string[];
}

export type OwnershipTransferred = ContractEventLog<{
  previousOwner: string;
  newOwner: string;
  0: string;
  1: string;
}>;

export interface BumpkinDetails extends BaseContract {
  constructor(
    jsonInterface: any[],
    address?: string,
    options?: ContractOptions
  ): BumpkinDetails;
  clone(): BumpkinDetails;
  methods: {
    addGameRole(_game: string): NonPayableTransactionObject<void>;

    getBumpkin(_tokenId: number | string | BN): NonPayableTransactionObject<{
      tokenId: string;
      tokenURI: string;
      owner: string;
      createdAt: string;
      createdBy: string;
      nonce: string;
      metadata: string;
      wardrobe: string;
    }>;

    getBumpkinBatch(
      _tokenIds: (number | string | BN)[]
    ): NonPayableTransactionObject<
      {
        tokenId: string;
        tokenURI: string;
        owner: string;
        createdAt: string;
        createdBy: string;
        nonce: string;
        metadata: string;
        wardrobe: string;
      }[]
    >;

    loadBumpkins(_owner: string): NonPayableTransactionObject<
      {
        tokenId: string;
        tokenURI: string;
        owner: string;
        createdAt: string;
        createdBy: string;
        nonce: string;
        metadata: string;
        wardrobe: string;
      }[]
    >;

    loadBumpkinsBatch(_owners: string[]): NonPayableTransactionObject<
      {
        tokenId: string;
        tokenURI: string;
        owner: string;
        createdAt: string;
        createdBy: string;
        nonce: string;
        metadata: string;
        wardrobe: string;
      }[][]
    >;

    owner(): NonPayableTransactionObject<string>;

    removeGameRole(_game: string): NonPayableTransactionObject<void>;

    renounceOwnership(): NonPayableTransactionObject<void>;

    transferOwnership(newOwner: string): NonPayableTransactionObject<void>;

    updateBumpkinDetails(
      _tokenId: number | string | BN,
      _details: {
        createdAt: number | string | BN;
        createdBy: string;
        nonce: string;
        metadata: string;
        wardrobe: string;
      }
    ): NonPayableTransactionObject<void>;

    updateBumpkinDetailsBatch(
      _tokenIds: (number | string | BN)[],
      _details: {
        createdAt: number | string | BN;
        createdBy: string;
        nonce: string;
        metadata: string;
        wardrobe: string;
      }[]
    ): NonPayableTransactionObject<void>;
  };
  events: {
    OwnershipTransferred(cb?: Callback<OwnershipTransferred>): EventEmitter;
    OwnershipTransferred(
      options?: EventOptions,
      cb?: Callback<OwnershipTransferred>
    ): EventEmitter;

    allEvents(options?: EventOptions, cb?: Callback<EventLog>): EventEmitter;
  };

  once(event: "OwnershipTransferred", cb: Callback<OwnershipTransferred>): void;
  once(
    event: "OwnershipTransferred",
    options: EventOptions,
    cb: Callback<OwnershipTransferred>
  ): void;
}