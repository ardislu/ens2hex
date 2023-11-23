# ens2hex

Minimal website to look up the Ethereum hexadecimal (`0x`) address for every [ENS](https://ens.domains/) (`.eth`) name in a list.

The keccak256 implementation is from Paul Miller's [noble-hashes](https://github.com/paulmillr/noble-hashes) library.

## Hardcoded ENS resolvers

> ![WARNING]<br>
> This tool will report an address of `0x0000000000000000000000000000000000000000` for ENS names that do not have an address set, or that use a custom ENS resolver.

The [official method of resolving an ENS name](https://docs.ens.domains/dapp-developer-guide/resolving-names) requires (1) getting the ENS resolver for the name, then (2) asking the resolver for the name's address.

To complete the lookup in one network request, this tool skips step (1) above and instead directly queries all the names against the ENS resolvers ["ENS: Public Resolver 2" (`0x4976fb03C32e5B8cfe2b6cCB31c09Ba78EBaBa41`)](https://etherscan.io/address/0x4976fb03C32e5B8cfe2b6cCB31c09Ba78EBaBa41) and ["ENS: Old Public Resolver 2" (`0x226159d592E2b063810a10Ebf6dcbADA94Ed68b8`)](https://etherscan.io/address/0x226159d592E2b063810a10Ebf6dcbADA94Ed68b8). These two resolvers will handle the majority of ENS names, but **this tool will miss ENS names where the owner has set a custom resolver**.
