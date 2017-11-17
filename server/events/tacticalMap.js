import App from "../app";
import { pubsub } from "../helpers/subscriptionManager.js";
import * as Classes from "../classes";

App.on("newTacticalMap", ({ name, flightId }) => {
  App.tacticalMaps.push(
    new Classes.TacticalMap({ name, flightId, template: !flightId })
  );
  pubsub.publish("tacticalMapsUpdate", App.tacticalMaps);
});
App.on("updateTacticalMap", ({ id }) => {});
App.on("freezeTacticalMap", ({ id }) => {});
App.on("duplicateTacticalMap", ({ id }) => {});
App.on("loadTacticalMap", ({ id }) => {});

App.on("addTacticalMapLayer", ({ mapId, name }) => {
  const map = App.tacticalMaps.find(t => t.id === mapId);
  map.addLayer({ name });
  pubsub.publish("tacticalMapsUpdate", App.tacticalMaps);
});
App.on("updateTacticalMapLayer", ({ mapId, layer }) => {
  const map = App.tacticalMaps.find(t => t.id === mapId);
  map.updateLayer(layer);
  pubsub.publish("tacticalMapsUpdate", App.tacticalMaps);
});
App.on("reorderTacticalMapLayer", ({ mapId, layer, order }) => {
  const map = App.tacticalMaps.find(t => t.id === mapId);
  map.reorderLayer(layer, order);
  pubsub.publish("tacticalMapsUpdate", App.tacticalMaps);
});
App.on("removeTacticalMapLayer", ({ mapId, layerId }) => {
  const map = App.tacticalMaps.find(t => t.id === mapId);
  map.removeLayer(layerId);
  pubsub.publish("tacticalMapsUpdate", App.tacticalMaps);
});

App.on("addTacticalMapItem", ({ mapId, layerId, item }) => {
  const map = App.tacticalMaps.find(t => t.id === mapId);
  map.addItemToLayer(layerId, item);
  pubsub.publish("tacticalMapsUpdate", App.tacticalMaps);
});
App.on("updateTacticalMapItem", ({ mapId, layerId, item }) => {
  const map = App.tacticalMaps.find(t => t.id === mapId);
  map.updateItemInLayer(layerId, item);
  pubsub.publish("tacticalMapsUpdate", App.tacticalMaps);
});
App.on("removeTacticalMapItem", ({ mapId, layerId, itemId }) => {
  const map = App.tacticalMaps.find(t => t.id === mapId);
  map.removeItemFromLayer(layerId, itemId);
  pubsub.publish("tacticalMapsUpdate", App.tacticalMaps);
});
