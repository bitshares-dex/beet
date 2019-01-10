import { blockchains } from "../../config/config.js";

let apiCache = {}

import BitShares from "./BitShares"
import Steem from "./Steem"
import store from "../../store";

export default function getBlockchainAPI(chain = null) {
    if (chain == null) {
        // ask store
        chain = store.state.WalletStore.wallet.chain
    }
    if (chain == "BTS") {
        if (!apiCache.BTS) {
            apiCache.BTS = new BitShares(blockchains[chain]);
        }
        return apiCache.BTS;
    } else if (chain == "STEEM") {
        if (!apiCache.STEEM) {
            apiCache.STEEM = new Steem(blockchains[chain]);
        }
        return apiCache.STEEM;
    }
}