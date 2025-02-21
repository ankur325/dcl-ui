/* eslint-disable */
import _m0 from "protobufjs/minimal";
import { PageRequest, PageResponse } from "../cosmos/base/query/v1beta1/pagination";
import { ApprovedUpgrade } from "./approved_upgrade";
import { ProposedUpgrade } from "./proposed_upgrade";
import { RejectedUpgrade } from "./rejected_upgrade";

export const protobufPackage = "zigbeealliance.distributedcomplianceledger.dclupgrade";

export interface QueryGetProposedUpgradeRequest {
  name: string;
}

export interface QueryGetProposedUpgradeResponse {
  proposedUpgrade: ProposedUpgrade | undefined;
}

export interface QueryAllProposedUpgradeRequest {
  pagination: PageRequest | undefined;
}

export interface QueryAllProposedUpgradeResponse {
  proposedUpgrade: ProposedUpgrade[];
  pagination: PageResponse | undefined;
}

export interface QueryGetApprovedUpgradeRequest {
  name: string;
}

export interface QueryGetApprovedUpgradeResponse {
  approvedUpgrade: ApprovedUpgrade | undefined;
}

export interface QueryAllApprovedUpgradeRequest {
  pagination: PageRequest | undefined;
}

export interface QueryAllApprovedUpgradeResponse {
  approvedUpgrade: ApprovedUpgrade[];
  pagination: PageResponse | undefined;
}

export interface QueryGetRejectedUpgradeRequest {
  name: string;
}

export interface QueryGetRejectedUpgradeResponse {
  rejectedUpgrade: RejectedUpgrade | undefined;
}

export interface QueryAllRejectedUpgradeRequest {
  pagination: PageRequest | undefined;
}

export interface QueryAllRejectedUpgradeResponse {
  rejectedUpgrade: RejectedUpgrade[];
  pagination: PageResponse | undefined;
}

function createBaseQueryGetProposedUpgradeRequest(): QueryGetProposedUpgradeRequest {
  return { name: "" };
}

export const QueryGetProposedUpgradeRequest = {
  encode(message: QueryGetProposedUpgradeRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetProposedUpgradeRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetProposedUpgradeRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.name = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryGetProposedUpgradeRequest {
    return { name: isSet(object.name) ? String(object.name) : "" };
  },

  toJSON(message: QueryGetProposedUpgradeRequest): unknown {
    const obj: any = {};
    if (message.name !== "") {
      obj.name = message.name;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryGetProposedUpgradeRequest>, I>>(base?: I): QueryGetProposedUpgradeRequest {
    return QueryGetProposedUpgradeRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryGetProposedUpgradeRequest>, I>>(
    object: I,
  ): QueryGetProposedUpgradeRequest {
    const message = createBaseQueryGetProposedUpgradeRequest();
    message.name = object.name ?? "";
    return message;
  },
};

function createBaseQueryGetProposedUpgradeResponse(): QueryGetProposedUpgradeResponse {
  return { proposedUpgrade: undefined };
}

export const QueryGetProposedUpgradeResponse = {
  encode(message: QueryGetProposedUpgradeResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.proposedUpgrade !== undefined) {
      ProposedUpgrade.encode(message.proposedUpgrade, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetProposedUpgradeResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetProposedUpgradeResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.proposedUpgrade = ProposedUpgrade.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryGetProposedUpgradeResponse {
    return {
      proposedUpgrade: isSet(object.proposedUpgrade) ? ProposedUpgrade.fromJSON(object.proposedUpgrade) : undefined,
    };
  },

  toJSON(message: QueryGetProposedUpgradeResponse): unknown {
    const obj: any = {};
    if (message.proposedUpgrade !== undefined) {
      obj.proposedUpgrade = ProposedUpgrade.toJSON(message.proposedUpgrade);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryGetProposedUpgradeResponse>, I>>(base?: I): QueryGetProposedUpgradeResponse {
    return QueryGetProposedUpgradeResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryGetProposedUpgradeResponse>, I>>(
    object: I,
  ): QueryGetProposedUpgradeResponse {
    const message = createBaseQueryGetProposedUpgradeResponse();
    message.proposedUpgrade = (object.proposedUpgrade !== undefined && object.proposedUpgrade !== null)
      ? ProposedUpgrade.fromPartial(object.proposedUpgrade)
      : undefined;
    return message;
  },
};

function createBaseQueryAllProposedUpgradeRequest(): QueryAllProposedUpgradeRequest {
  return { pagination: undefined };
}

export const QueryAllProposedUpgradeRequest = {
  encode(message: QueryAllProposedUpgradeRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllProposedUpgradeRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllProposedUpgradeRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.pagination = PageRequest.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryAllProposedUpgradeRequest {
    return { pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined };
  },

  toJSON(message: QueryAllProposedUpgradeRequest): unknown {
    const obj: any = {};
    if (message.pagination !== undefined) {
      obj.pagination = PageRequest.toJSON(message.pagination);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryAllProposedUpgradeRequest>, I>>(base?: I): QueryAllProposedUpgradeRequest {
    return QueryAllProposedUpgradeRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryAllProposedUpgradeRequest>, I>>(
    object: I,
  ): QueryAllProposedUpgradeRequest {
    const message = createBaseQueryAllProposedUpgradeRequest();
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryAllProposedUpgradeResponse(): QueryAllProposedUpgradeResponse {
  return { proposedUpgrade: [], pagination: undefined };
}

export const QueryAllProposedUpgradeResponse = {
  encode(message: QueryAllProposedUpgradeResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.proposedUpgrade) {
      ProposedUpgrade.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllProposedUpgradeResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllProposedUpgradeResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.proposedUpgrade.push(ProposedUpgrade.decode(reader, reader.uint32()));
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.pagination = PageResponse.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryAllProposedUpgradeResponse {
    return {
      proposedUpgrade: Array.isArray(object?.proposedUpgrade)
        ? object.proposedUpgrade.map((e: any) => ProposedUpgrade.fromJSON(e))
        : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryAllProposedUpgradeResponse): unknown {
    const obj: any = {};
    if (message.proposedUpgrade?.length) {
      obj.proposedUpgrade = message.proposedUpgrade.map((e) => ProposedUpgrade.toJSON(e));
    }
    if (message.pagination !== undefined) {
      obj.pagination = PageResponse.toJSON(message.pagination);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryAllProposedUpgradeResponse>, I>>(base?: I): QueryAllProposedUpgradeResponse {
    return QueryAllProposedUpgradeResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryAllProposedUpgradeResponse>, I>>(
    object: I,
  ): QueryAllProposedUpgradeResponse {
    const message = createBaseQueryAllProposedUpgradeResponse();
    message.proposedUpgrade = object.proposedUpgrade?.map((e) => ProposedUpgrade.fromPartial(e)) || [];
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageResponse.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryGetApprovedUpgradeRequest(): QueryGetApprovedUpgradeRequest {
  return { name: "" };
}

export const QueryGetApprovedUpgradeRequest = {
  encode(message: QueryGetApprovedUpgradeRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetApprovedUpgradeRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetApprovedUpgradeRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.name = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryGetApprovedUpgradeRequest {
    return { name: isSet(object.name) ? String(object.name) : "" };
  },

  toJSON(message: QueryGetApprovedUpgradeRequest): unknown {
    const obj: any = {};
    if (message.name !== "") {
      obj.name = message.name;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryGetApprovedUpgradeRequest>, I>>(base?: I): QueryGetApprovedUpgradeRequest {
    return QueryGetApprovedUpgradeRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryGetApprovedUpgradeRequest>, I>>(
    object: I,
  ): QueryGetApprovedUpgradeRequest {
    const message = createBaseQueryGetApprovedUpgradeRequest();
    message.name = object.name ?? "";
    return message;
  },
};

function createBaseQueryGetApprovedUpgradeResponse(): QueryGetApprovedUpgradeResponse {
  return { approvedUpgrade: undefined };
}

export const QueryGetApprovedUpgradeResponse = {
  encode(message: QueryGetApprovedUpgradeResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.approvedUpgrade !== undefined) {
      ApprovedUpgrade.encode(message.approvedUpgrade, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetApprovedUpgradeResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetApprovedUpgradeResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.approvedUpgrade = ApprovedUpgrade.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryGetApprovedUpgradeResponse {
    return {
      approvedUpgrade: isSet(object.approvedUpgrade) ? ApprovedUpgrade.fromJSON(object.approvedUpgrade) : undefined,
    };
  },

  toJSON(message: QueryGetApprovedUpgradeResponse): unknown {
    const obj: any = {};
    if (message.approvedUpgrade !== undefined) {
      obj.approvedUpgrade = ApprovedUpgrade.toJSON(message.approvedUpgrade);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryGetApprovedUpgradeResponse>, I>>(base?: I): QueryGetApprovedUpgradeResponse {
    return QueryGetApprovedUpgradeResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryGetApprovedUpgradeResponse>, I>>(
    object: I,
  ): QueryGetApprovedUpgradeResponse {
    const message = createBaseQueryGetApprovedUpgradeResponse();
    message.approvedUpgrade = (object.approvedUpgrade !== undefined && object.approvedUpgrade !== null)
      ? ApprovedUpgrade.fromPartial(object.approvedUpgrade)
      : undefined;
    return message;
  },
};

function createBaseQueryAllApprovedUpgradeRequest(): QueryAllApprovedUpgradeRequest {
  return { pagination: undefined };
}

export const QueryAllApprovedUpgradeRequest = {
  encode(message: QueryAllApprovedUpgradeRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllApprovedUpgradeRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllApprovedUpgradeRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.pagination = PageRequest.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryAllApprovedUpgradeRequest {
    return { pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined };
  },

  toJSON(message: QueryAllApprovedUpgradeRequest): unknown {
    const obj: any = {};
    if (message.pagination !== undefined) {
      obj.pagination = PageRequest.toJSON(message.pagination);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryAllApprovedUpgradeRequest>, I>>(base?: I): QueryAllApprovedUpgradeRequest {
    return QueryAllApprovedUpgradeRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryAllApprovedUpgradeRequest>, I>>(
    object: I,
  ): QueryAllApprovedUpgradeRequest {
    const message = createBaseQueryAllApprovedUpgradeRequest();
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryAllApprovedUpgradeResponse(): QueryAllApprovedUpgradeResponse {
  return { approvedUpgrade: [], pagination: undefined };
}

export const QueryAllApprovedUpgradeResponse = {
  encode(message: QueryAllApprovedUpgradeResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.approvedUpgrade) {
      ApprovedUpgrade.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllApprovedUpgradeResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllApprovedUpgradeResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.approvedUpgrade.push(ApprovedUpgrade.decode(reader, reader.uint32()));
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.pagination = PageResponse.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryAllApprovedUpgradeResponse {
    return {
      approvedUpgrade: Array.isArray(object?.approvedUpgrade)
        ? object.approvedUpgrade.map((e: any) => ApprovedUpgrade.fromJSON(e))
        : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryAllApprovedUpgradeResponse): unknown {
    const obj: any = {};
    if (message.approvedUpgrade?.length) {
      obj.approvedUpgrade = message.approvedUpgrade.map((e) => ApprovedUpgrade.toJSON(e));
    }
    if (message.pagination !== undefined) {
      obj.pagination = PageResponse.toJSON(message.pagination);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryAllApprovedUpgradeResponse>, I>>(base?: I): QueryAllApprovedUpgradeResponse {
    return QueryAllApprovedUpgradeResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryAllApprovedUpgradeResponse>, I>>(
    object: I,
  ): QueryAllApprovedUpgradeResponse {
    const message = createBaseQueryAllApprovedUpgradeResponse();
    message.approvedUpgrade = object.approvedUpgrade?.map((e) => ApprovedUpgrade.fromPartial(e)) || [];
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageResponse.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryGetRejectedUpgradeRequest(): QueryGetRejectedUpgradeRequest {
  return { name: "" };
}

export const QueryGetRejectedUpgradeRequest = {
  encode(message: QueryGetRejectedUpgradeRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetRejectedUpgradeRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetRejectedUpgradeRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.name = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryGetRejectedUpgradeRequest {
    return { name: isSet(object.name) ? String(object.name) : "" };
  },

  toJSON(message: QueryGetRejectedUpgradeRequest): unknown {
    const obj: any = {};
    if (message.name !== "") {
      obj.name = message.name;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryGetRejectedUpgradeRequest>, I>>(base?: I): QueryGetRejectedUpgradeRequest {
    return QueryGetRejectedUpgradeRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryGetRejectedUpgradeRequest>, I>>(
    object: I,
  ): QueryGetRejectedUpgradeRequest {
    const message = createBaseQueryGetRejectedUpgradeRequest();
    message.name = object.name ?? "";
    return message;
  },
};

function createBaseQueryGetRejectedUpgradeResponse(): QueryGetRejectedUpgradeResponse {
  return { rejectedUpgrade: undefined };
}

export const QueryGetRejectedUpgradeResponse = {
  encode(message: QueryGetRejectedUpgradeResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.rejectedUpgrade !== undefined) {
      RejectedUpgrade.encode(message.rejectedUpgrade, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetRejectedUpgradeResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetRejectedUpgradeResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.rejectedUpgrade = RejectedUpgrade.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryGetRejectedUpgradeResponse {
    return {
      rejectedUpgrade: isSet(object.rejectedUpgrade) ? RejectedUpgrade.fromJSON(object.rejectedUpgrade) : undefined,
    };
  },

  toJSON(message: QueryGetRejectedUpgradeResponse): unknown {
    const obj: any = {};
    if (message.rejectedUpgrade !== undefined) {
      obj.rejectedUpgrade = RejectedUpgrade.toJSON(message.rejectedUpgrade);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryGetRejectedUpgradeResponse>, I>>(base?: I): QueryGetRejectedUpgradeResponse {
    return QueryGetRejectedUpgradeResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryGetRejectedUpgradeResponse>, I>>(
    object: I,
  ): QueryGetRejectedUpgradeResponse {
    const message = createBaseQueryGetRejectedUpgradeResponse();
    message.rejectedUpgrade = (object.rejectedUpgrade !== undefined && object.rejectedUpgrade !== null)
      ? RejectedUpgrade.fromPartial(object.rejectedUpgrade)
      : undefined;
    return message;
  },
};

function createBaseQueryAllRejectedUpgradeRequest(): QueryAllRejectedUpgradeRequest {
  return { pagination: undefined };
}

export const QueryAllRejectedUpgradeRequest = {
  encode(message: QueryAllRejectedUpgradeRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllRejectedUpgradeRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllRejectedUpgradeRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.pagination = PageRequest.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryAllRejectedUpgradeRequest {
    return { pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined };
  },

  toJSON(message: QueryAllRejectedUpgradeRequest): unknown {
    const obj: any = {};
    if (message.pagination !== undefined) {
      obj.pagination = PageRequest.toJSON(message.pagination);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryAllRejectedUpgradeRequest>, I>>(base?: I): QueryAllRejectedUpgradeRequest {
    return QueryAllRejectedUpgradeRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryAllRejectedUpgradeRequest>, I>>(
    object: I,
  ): QueryAllRejectedUpgradeRequest {
    const message = createBaseQueryAllRejectedUpgradeRequest();
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryAllRejectedUpgradeResponse(): QueryAllRejectedUpgradeResponse {
  return { rejectedUpgrade: [], pagination: undefined };
}

export const QueryAllRejectedUpgradeResponse = {
  encode(message: QueryAllRejectedUpgradeResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.rejectedUpgrade) {
      RejectedUpgrade.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllRejectedUpgradeResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllRejectedUpgradeResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.rejectedUpgrade.push(RejectedUpgrade.decode(reader, reader.uint32()));
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.pagination = PageResponse.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryAllRejectedUpgradeResponse {
    return {
      rejectedUpgrade: Array.isArray(object?.rejectedUpgrade)
        ? object.rejectedUpgrade.map((e: any) => RejectedUpgrade.fromJSON(e))
        : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryAllRejectedUpgradeResponse): unknown {
    const obj: any = {};
    if (message.rejectedUpgrade?.length) {
      obj.rejectedUpgrade = message.rejectedUpgrade.map((e) => RejectedUpgrade.toJSON(e));
    }
    if (message.pagination !== undefined) {
      obj.pagination = PageResponse.toJSON(message.pagination);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryAllRejectedUpgradeResponse>, I>>(base?: I): QueryAllRejectedUpgradeResponse {
    return QueryAllRejectedUpgradeResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryAllRejectedUpgradeResponse>, I>>(
    object: I,
  ): QueryAllRejectedUpgradeResponse {
    const message = createBaseQueryAllRejectedUpgradeResponse();
    message.rejectedUpgrade = object.rejectedUpgrade?.map((e) => RejectedUpgrade.fromPartial(e)) || [];
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageResponse.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

/** Query defines the gRPC querier service. */
export interface Query {
  /** Queries a ProposedUpgrade by index. */
  ProposedUpgrade(request: QueryGetProposedUpgradeRequest): Promise<QueryGetProposedUpgradeResponse>;
  /** Queries a list of ProposedUpgrade items. */
  ProposedUpgradeAll(request: QueryAllProposedUpgradeRequest): Promise<QueryAllProposedUpgradeResponse>;
  /** Queries a ApprovedUpgrade by index. */
  ApprovedUpgrade(request: QueryGetApprovedUpgradeRequest): Promise<QueryGetApprovedUpgradeResponse>;
  /** Queries a list of ApprovedUpgrade items. */
  ApprovedUpgradeAll(request: QueryAllApprovedUpgradeRequest): Promise<QueryAllApprovedUpgradeResponse>;
  /** Queries a RejectedUpgrade by index. */
  RejectedUpgrade(request: QueryGetRejectedUpgradeRequest): Promise<QueryGetRejectedUpgradeResponse>;
  /** Queries a list of RejectedUpgrade items. */
  RejectedUpgradeAll(request: QueryAllRejectedUpgradeRequest): Promise<QueryAllRejectedUpgradeResponse>;
}

export const QueryServiceName = "zigbeealliance.distributedcomplianceledger.dclupgrade.Query";
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || QueryServiceName;
    this.rpc = rpc;
    this.ProposedUpgrade = this.ProposedUpgrade.bind(this);
    this.ProposedUpgradeAll = this.ProposedUpgradeAll.bind(this);
    this.ApprovedUpgrade = this.ApprovedUpgrade.bind(this);
    this.ApprovedUpgradeAll = this.ApprovedUpgradeAll.bind(this);
    this.RejectedUpgrade = this.RejectedUpgrade.bind(this);
    this.RejectedUpgradeAll = this.RejectedUpgradeAll.bind(this);
  }
  ProposedUpgrade(request: QueryGetProposedUpgradeRequest): Promise<QueryGetProposedUpgradeResponse> {
    const data = QueryGetProposedUpgradeRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "ProposedUpgrade", data);
    return promise.then((data) => QueryGetProposedUpgradeResponse.decode(_m0.Reader.create(data)));
  }

  ProposedUpgradeAll(request: QueryAllProposedUpgradeRequest): Promise<QueryAllProposedUpgradeResponse> {
    const data = QueryAllProposedUpgradeRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "ProposedUpgradeAll", data);
    return promise.then((data) => QueryAllProposedUpgradeResponse.decode(_m0.Reader.create(data)));
  }

  ApprovedUpgrade(request: QueryGetApprovedUpgradeRequest): Promise<QueryGetApprovedUpgradeResponse> {
    const data = QueryGetApprovedUpgradeRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "ApprovedUpgrade", data);
    return promise.then((data) => QueryGetApprovedUpgradeResponse.decode(_m0.Reader.create(data)));
  }

  ApprovedUpgradeAll(request: QueryAllApprovedUpgradeRequest): Promise<QueryAllApprovedUpgradeResponse> {
    const data = QueryAllApprovedUpgradeRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "ApprovedUpgradeAll", data);
    return promise.then((data) => QueryAllApprovedUpgradeResponse.decode(_m0.Reader.create(data)));
  }

  RejectedUpgrade(request: QueryGetRejectedUpgradeRequest): Promise<QueryGetRejectedUpgradeResponse> {
    const data = QueryGetRejectedUpgradeRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "RejectedUpgrade", data);
    return promise.then((data) => QueryGetRejectedUpgradeResponse.decode(_m0.Reader.create(data)));
  }

  RejectedUpgradeAll(request: QueryAllRejectedUpgradeRequest): Promise<QueryAllRejectedUpgradeResponse> {
    const data = QueryAllRejectedUpgradeRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "RejectedUpgradeAll", data);
    return promise.then((data) => QueryAllRejectedUpgradeResponse.decode(_m0.Reader.create(data)));
  }
}

interface Rpc {
  request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
