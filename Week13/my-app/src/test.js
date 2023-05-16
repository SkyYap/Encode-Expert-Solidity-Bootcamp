async function getCamp() {
    const provider = new ethers.JsonRpcProvider(sepoliaRpcUrl, 'sepolia')
    const contract_address = '0xAaA84599036017E4f44b506510f4847D5B46471D';
    const slot = 0;
    const data = await provider.getStorage(contract_address, slot) 
    console.log("Private Data :", data)
  }