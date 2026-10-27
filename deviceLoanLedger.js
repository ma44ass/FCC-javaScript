const equipmentLedger = {
  1: {
    type: "PC",
    status: "CheckedOut",
    borrower: { name: "John Smith", email: "john@acme.org" },
    dueDate: "11/30/2025",
  },
  2: {
    type: "Laptop",
    status: "CheckedIn",
    borrower: { name: "", email: "" },
    dueDate: "",
  },
  3: {
    type: "Laptop",
    status: "CheckedOut",
    borrower: { name: "Jane Doe", email: "jane@acme.org" },
    dueDate: "10/31/2025",
  },
  4: {
    type: "iPad",
    status: "CheckedIn",
    borrower: { name: "", email: "" },
    dueDate: "",
  },
};

function checkoutDevice(ledger, assetTag, borrower) {
  const ledgerClone = JSON.parse(JSON.stringify(ledger));
  const device = ledgerClone[assetTag];

  if (!device) {
    return {
      ledger: ledgerClone,
      message: `Asset ${assetTag} does not exist.`,
    };
  }

  if (device.status === "CheckedOut") {
    return {
      ledger: ledgerClone,
      message: `Asset ${assetTag} is already CheckedOut.`,
    };
  }

  device.borrower = { name: borrower.name, email: borrower.email };
  device.status = "CheckedOut";

  return {
    ledger: ledgerClone,
    message: `Asset ${assetTag} successfully checked out to ${borrower.name}.`,
  };
}

function checkinDevice(ledger, assetTag) {
  const ledgerClone = JSON.parse(JSON.stringify(ledger));
  const device = ledgerClone[assetTag];

  if (!device) {
    return {
      ledger: ledgerClone,
      message: `Asset ${assetTag} does not exist.`,
    };
  }

  device.borrower = { name: "", email: "" };
  device.dueDate = "";
  device.status = "CheckedIn";

  return {
    ledger: ledgerClone,
    message: `Asset ${assetTag} successfully checked in.`,
  };
}

function listOverdueDevices(ledger, today) {
  const convertDate = (dateStr) => {
    if (!dateStr) return [0, 0, 0];
    const [month, day, year] = dateStr.split("/").map(Number);
    return [year, month, day];
  };

  const isBefore = (dateA, dateB) => {
    if (dateA[0] !== dateB[0]) return dateA[0] < dateB[0];
    if (dateA[1] !== dateB[1]) return dateA[1] < dateB[1];
    return dateA[2] < dateB[2];
  };

  const verifiedToday = convertDate(today);

  const overdueDevices = Object.values(ledger).filter((device) => {
    if (device.status !== "CheckedOut" || !device.dueDate) {
      return false;
    }

    const duedateConverted = convertDate(device.dueDate);
    return isBefore(duedateConverted, verifiedToday);
  });

  overdueDevices.sort((a, b) => {
    const dateA = convertDate(a.dueDate);
    const dateB = convertDate(b.dueDate);

    if (dateA[0] !== dateB[0]) return dateA[0] - dateB[0];
    if (dateA[1] !== dateB[1]) return dateA[1] - dateB[1];
    return dateA[2] - dateB[2];
  });

  return overdueDevices;
}

function serializeLedger(ledger) {
  return JSON.stringify(ledger);
}

const savedData = serializeLedger(equipmentLedger);

function loadLedger(savedData) {
  return JSON.parse(savedData);
}

/*Tests*/

console.log(
  checkoutDevice(equipmentLedger, "2", {
    name: "Alice",
    email: "alice@acme.org",
  }),
);
console.log(
  checkoutDevice(equipmentLedger, "99", {
    name: "Alice",
    email: "alice@acme.org",
  }),
);
console.log(
  checkoutDevice(equipmentLedger, "1", {
    name: "Alice",
    email: "alice@acme.org",
  }),
);
console.log(checkinDevice(equipmentLedger, "1"));
console.log(listOverdueDevices(equipmentLedger, "12/01/2025"));
