---
"@blockprotocol/graph": patch
---

Ensure non-temporal BP methods have a non-temporal return, even when passed a temporal subgraph. Add `getFetchUrlFromTypeId` parameter to the codegen script. Gracefully handle non-intersecting edges in `getIncomingLinksForEntity` and `getOutgoingLinksForEntity`.