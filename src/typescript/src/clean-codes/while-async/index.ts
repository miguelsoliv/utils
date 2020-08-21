interface IAccount {
  agency: number;
  accountNumber: number;
}

const accounts: IAccount[] = [
  {
    // generate random 6 length number not starting with 0
    agency: Math.floor(100000 + Math.random() * 900000),
    accountNumber: 538434,
  },
  {
    agency: Math.floor(100000 + Math.random() * 900000),
    accountNumber: 737434,
  },
  {
    agency: Math.floor(100000 + Math.random() * 900000),
    accountNumber: 938434,
  },
];

function findOneByNumber(accountNum: number): Promise<IAccount | undefined> {
  return new Promise(resolve => {
    resolve(accounts.find(account => account.accountNumber === accountNum));
  });
}

let changeNumber = 1;

async function problematicAccountNumberAvailabilityCheck(): Promise<void> {
  let isAvailable = false;

  while (!isAvailable) {
    let accountNumber: number;

    switch (changeNumber) {
      case 1:
        accountNumber = 538434;
        break;
      case 2:
        accountNumber = 938434;
        break;
      case 3:
        accountNumber = 737434;
        break;
      default:
        accountNumber = 267957;
    }

    const checkAccountNumberAvailability = await findOneByNumber(accountNumber);

    if (checkAccountNumberAvailability) {
      console.log(`found: ${JSON.stringify(checkAccountNumberAvailability)}`);
      changeNumber += 1;
    } else {
      console.log(`not found with given account number: ${accountNumber}`);
      isAvailable = true;
    }
  }
}

/**
 * @function problemSolved
 *
 * @description Keep generating (mocked) random number for account until one is available
 * @param resolve Promise resolver
 */
async function problemSolved(resolve: any): Promise<void> {
  let accountNumber: number;

  switch (changeNumber) {
    case 1:
      accountNumber = 538434;
      break;
    case 2:
      accountNumber = 938434;
      break;
    case 3:
      accountNumber = 737434;
      break;
    default:
      accountNumber = 267957;
  }

  findOneByNumber(accountNumber).then(result => {
    if (result) {
      console.log(`found: ${JSON.stringify(result)}`);
      changeNumber += 1;
      problemSolved(resolve);
    } else {
      console.log(`not found with given account number: ${accountNumber}`);
      resolve(result);
    }
  });
}

export { problematicAccountNumberAvailabilityCheck, problemSolved };
