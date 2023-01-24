/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from 'ethers'
import type { Provider } from '@ethersproject/providers'
import type {
	ISemaphoreGroups,
	ISemaphoreGroupsInterface,
} from '../../../../@semaphore-protocol/contracts/interfaces/ISemaphoreGroups'

const _abi = [
	{
		inputs: [],
		name: 'Semaphore__GroupAlreadyExists',
		type: 'error',
	},
	{
		inputs: [],
		name: 'Semaphore__GroupDoesNotExist',
		type: 'error',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'uint256',
				name: 'groupId',
				type: 'uint256',
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: 'merkleTreeDepth',
				type: 'uint256',
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: 'zeroValue',
				type: 'uint256',
			},
		],
		name: 'GroupCreated',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'uint256',
				name: 'groupId',
				type: 'uint256',
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: 'index',
				type: 'uint256',
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: 'identityCommitment',
				type: 'uint256',
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: 'merkleTreeRoot',
				type: 'uint256',
			},
		],
		name: 'MemberAdded',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'uint256',
				name: 'groupId',
				type: 'uint256',
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: 'index',
				type: 'uint256',
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: 'identityCommitment',
				type: 'uint256',
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: 'merkleTreeRoot',
				type: 'uint256',
			},
		],
		name: 'MemberRemoved',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'uint256',
				name: 'groupId',
				type: 'uint256',
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: 'index',
				type: 'uint256',
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: 'identityCommitment',
				type: 'uint256',
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: 'newIdentityCommitment',
				type: 'uint256',
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: 'merkleTreeRoot',
				type: 'uint256',
			},
		],
		name: 'MemberUpdated',
		type: 'event',
	},
	{
		inputs: [
			{
				internalType: 'uint256',
				name: 'groupId',
				type: 'uint256',
			},
		],
		name: 'getMerkleTreeDepth',
		outputs: [
			{
				internalType: 'uint256',
				name: '',
				type: 'uint256',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'uint256',
				name: 'groupId',
				type: 'uint256',
			},
		],
		name: 'getMerkleTreeRoot',
		outputs: [
			{
				internalType: 'uint256',
				name: '',
				type: 'uint256',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'uint256',
				name: 'groupId',
				type: 'uint256',
			},
		],
		name: 'getNumberOfMerkleTreeLeaves',
		outputs: [
			{
				internalType: 'uint256',
				name: '',
				type: 'uint256',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
] as const

export class ISemaphoreGroups__factory {
	static readonly abi = _abi
	static createInterface(): ISemaphoreGroupsInterface {
		return new utils.Interface(_abi) as ISemaphoreGroupsInterface
	}
	static connect(address: string, signerOrProvider: Signer | Provider): ISemaphoreGroups {
		return new Contract(address, _abi, signerOrProvider) as ISemaphoreGroups
	}
}
