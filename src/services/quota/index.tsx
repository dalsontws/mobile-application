export interface Transaction {
  quantity: number;
  transactionTime: number;
}

export interface QuotaResponse {
  remainingQuota: number;
  history: Transaction[];
}

const wait = async (timeout: number): Promise<void> => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve();
    }, timeout);
  });
};

export const getQuota = async (nric: string): Promise<QuotaResponse> => {
  // Mock implementation of get quota endpoint
  await wait(500);
  return {
    remainingQuota: 0,
    history: [
      {
        quantity: 5,
        transactionTime: 1580330434981
      }
    ]
  };
};
