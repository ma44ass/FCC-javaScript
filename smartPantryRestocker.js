const pantry = [
  {
    sku: "A10",
    name: "Tomatoes",
    qty: 4,
    expires: "2027-01-01",
    zone: "fridge",
  },
  {
    sku: "D43",
    name: "Pineapples",
    qty: 2,
    expires: "2020-01-01",
    zone: "general",
  },
];

const rawData = [
  "A10|Tomatoes|5|2027-01-01",
  "B21|Bananas|10|2027-01-01",
  "C32|Eggs|3|2027-01-01|fridge",
  "C32|Eggs|3|2027-01-01",
  "D43|Pineapples|0|2027-01-01",
  "E54|Peppers|-1|2027-01-01|fridge",
];

// 1. Parse raw data into structured objects and ignore duplicate SKUs
function parseShipment(data) {
  const uniqueSKU = new Set();
  const pantryItems = [];

  for (const item of data) {
    const extractedData = item.split("|");
    const sku = extractedData[0];

    if (!uniqueSKU.has(sku)) {
      uniqueSKU.add(sku);
      pantryItems.push({
        sku: extractedData[0],
        name: extractedData[1],
        qty: Number(extractedData[2]),
        expires: extractedData[3],
        zone: extractedData[4] || "general",
      });
    }
  }

  return pantryItems;
}

// 2. Compare shipment items with pantry and plan actions
function planRestock(pantry, shipment) {
  const actions = [];
  const pantryMap = new Map(pantry.map((item) => [item.sku, item]));

  for (const item of shipment) {
    let actionType;

    if (item.qty <= 0) {
      actionType = "discard";
    } else if (pantryMap.has(item.sku)) {
      actionType = "restock";
    } else {
      actionType = "donate";
    }

    actions.push({
      type: actionType,
      item: item,
    });
  }

  return actions;
}

// 3. Group actions by their storage zones
function groupByZone(actions) {
  const grouped = {};

  for (const action of actions) {
    const zone = action.item.zone || "general";
    if (!grouped[zone]) {
      grouped[zone] = [];
    }

    grouped[zone].push(action);
  }

  return grouped;
}

function clonePantry(pantry) {
  const pantryDeepCopy = structuredClone(pantry);
  return pantryDeepCopy;
}

const shipmentObjects = parseShipment(rawData);
const restockActions = planRestock(pantry, shipmentObjects);
const finalGroupedResult = groupByZone(restockActions);

console.log(finalGroupedResult);
