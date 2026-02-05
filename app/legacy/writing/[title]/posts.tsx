import Web3Post, {
  metadata as web3metadata,
} from "./broken-incentive-machine.mdx";
import AccountAbstractionPost, {
  metadata as aametadata,
} from "./account-abstraction.mdx";
import OnFactoryPost, { metadata as facmetadata } from "./on-factory.mdx";

export const posts = [
  {
    post: Web3Post,
    ...web3metadata,
  },
  {
    post: OnFactoryPost,
    ...facmetadata,
  },
  {
    post: AccountAbstractionPost,
    ...aametadata,
  },
];
