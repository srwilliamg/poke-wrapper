import { IEndpointLogRepository, IPokemonController } from '../../adapters';

import { handleRequest } from '../../utils/handle-request';

const route = '/pokemon';
export const pokeRoutes = (
  app,
  controller: IPokemonController,
  endpointLogRepository: IEndpointLogRepository,
) => {
  app.get(route, handleRequest(controller.findPokemon, endpointLogRepository));
};
