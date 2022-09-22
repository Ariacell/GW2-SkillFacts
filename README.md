# GW2 Skills API but usable

A fan made project with the primary aim of exposing an api for gw2 skill facts that isn't hamstrung by lack of internal dev resources at arenanet.

Guiding principles of the project:

- Maintain 1-1 consistency with internal arenanet skill ids. Rote learning one set of arbitrary ids is enough.
- In the same vain: 1-1 parity of existing endpoints for skill ids (including query parameter support for multiple ids)
- Do not make any breaking changes to the existing schema. This API should be interoperable with the real arenanet API to allow easy adoption.

## Local setup

### Environment

You will require a .env file with the following environment variables:

```
MONGO_ROOT_USER=
MONGO_ROOT_PASSWORD=
MONGO_SKILLS_DB_USER_USERNAME=
MONGO_SKILLS_DB_USER_PASSWORD=
MONGOEXPRESS_LOGIN=
MONGOEXPRESS_PASSWORD=
```

## Schema structure

In the interest of making updates as easy as possible, the existing api structure is mirrored from the official GW2 API (see examples section), adhering to an open to expansion principle.

## Roadmap

### MVP

Feature               | Status    | Details
--------------------- | --------- | ---------------------------------------------------------
TOOLING and DevX      | ⌛ PENDING | Tooling to support development
Skill DB              | ⌛ PENDING | Mongo Database to back api
RUST CLIENT           | ⌛ PENDING | Basic rust client to sit in front of DB
API                   | ⌛ PENDING | API exposed via some method to interact with rust client
Increased DB fidelity | ⌛ PENDING | Add coefficients to DB data
Increased DB fidelity | ⌛ PENDING | Add gamemode specific data for relevant skills to DB data

### Future features

Feature                              | Status                  | Details
------------------------------------ | ----------------------- | ------------------------------
Automated CI/CD for DB merge updates | ON THE TABLE ┬──┬ ¯_(ツ) | Tooling to support development

## Contributing

### Data updates

The ideal data update workflow will automatically redeploy the API on merge, this is post MVP though

### Issues

Raise issues via the template provided please.

### Code contributions

Anyone is welcome to raise PRs if there is something you would like to improve (this project pulls double duty as a rust educational experiment), please use the template provided though as much as it's applicable.
