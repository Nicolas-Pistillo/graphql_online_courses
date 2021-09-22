import { IResolvers } from "@graphql-tools/utils";

const query : IResolvers = {

    Query: {
        estudiantes() : String {
            return "Lista de estudiantes";
        }
    }

}

export default query;