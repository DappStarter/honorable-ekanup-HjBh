require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const WalletProvider = require('./src/wallet-provider');


let mnemonic = 'half kiwi orange tooth bike curtain net protect hidden arena outer thrive'; 
let testAccounts = [
"0x0a471c73fa407b7670be585bf10e3a4c2ea4084d71387592cd9813b314c6d9e0",
"0xcebe72f8a80c04c3575296becfa6bdb1d3b0b0987d5ab784331079725c55adae",
"0xa12dafce4eb90f6bc8a5c932d29b77cba61837cf62a754f93320e6a6d94a1a9c",
"0x4c00634b402b2cf567bfd1e027555ce3db42e95cc607cefedc1b950218d583e3",
"0x8fab4b69e164b411de1baa23e5b8c2e895b2db3350a2118d9a34a0d9cdd30de3",
"0xd4233e3ac72acf64061a8b3debecce7dfc88196f5bd1918170306aefae6e7283",
"0x5a12c19111d30ac1ac880bc0d3156eb8190c3a456d743b0b2f31707227705db4",
"0x8cce39cb8fe46fc7ef76d105b582efd95ec162fd562b82127643204477b2fbff",
"0xc4732fc0da6be0ec6a497d351b83afc0ddf8f7d504ad1912762205745cdeae3b",
"0x029876f8ee33dfc0905553156e653f1550238d58d2b40cd1dda6155ba27792a7"
]; 
let devUri = 'https://test.confluxrpc.org/v2';
let host = devUri.replace('http://','').replace('https://','');
let privateKeys = new WalletProvider(mnemonic, 10).privateKeys;

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            network_id: '*',
            host,
            port: 80,
            type: "conflux",
            privateKeys,
            walletProvider: () => new WalletProvider(mnemonic, 10)
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


