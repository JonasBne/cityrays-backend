"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const apollo_server_express_1 = require("apollo-server-express");
const config_1 = require("./config");
const package_json_1 = __importDefault(require("../package.json"));
// https://www.tomray.dev/setup-and-deploy-graphql-server#build-your-database-schema-with-prisma
const startServer = () => __awaiter(void 0, void 0, void 0, function* () {
    const app = (0, express_1.default)();
    // const httpServer = createServer(app);
    app.get('/', (req, res) => {
        res.json({ name: 'hello world', version: package_json_1.default.version });
    });
    const typeDefs = (0, apollo_server_express_1.gql) `
    type Query {
      hello: String
    }
  `;
    const resolvers = {
        Query: {
            hello: () => 'Hello world!',
        },
    };
    const apolloServer = new apollo_server_express_1.ApolloServer({
        typeDefs,
        resolvers,
    });
    yield apolloServer.start();
    apolloServer.applyMiddleware({
        app,
        path: '/api/graphql',
    });
    app.listen({ port: config_1.config.port }, () => console.log(`Server listening on http://localhost:${config_1.config.port}${apolloServer.graphqlPath}`));
});
startServer();
