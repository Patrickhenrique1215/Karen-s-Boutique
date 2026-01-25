// dataService.js
import { env } from "./env.js";
import { mockService } from "./mockService.js";
import { apiService } from "./apiService.js";

const services = {
  mock: mockService,
  api: apiService
};

export const dataService = services[env.DATA_SOURCE];


