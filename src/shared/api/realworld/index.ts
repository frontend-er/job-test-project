import { Api, ContentType } from './Api';
import type {
  GenericErrorModelDto,
  UnexpectedErrorModelDto,
  ErrorModelDto,
  RequestParams,
} from './Api';


const realworldApi = new Api<string>({
  baseApiParams: {
    headers: {
      'Content-Type': ContentType.Json,
    },
    format: 'json',
  },
});

export { realworldApi };
export type {
  GenericErrorModelDto,
  UnexpectedErrorModelDto,
  ErrorModelDto,
  RequestParams,
};
