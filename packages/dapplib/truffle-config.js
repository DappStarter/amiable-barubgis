require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const WalletProvider = require('./src/wallet-provider');


let mnemonic = 'gesture hero flame shadow shock note maze comic install basket surge tree'; 
let testAccounts = [
"0x65f08b12b950ead5ff9f41e34186e56d5836003d242709b18bf5b455623d881b",
"0xe2fe0f60528d9fddfb5bfa29dd0b06be037d0fc2adca4f3e140a67476af1a5ec",
"0x8fb2c217aa244a5cabfc33d91f27e0cea2bc107b13d2500daaa3caac338d41f8",
"0x1ca7a4478a49d0df197fb35b2d610736f05ea6126ede9d1a351b7634f69bb9a8",
"0xa13a69f1845556a2cba10ff993544315e8222621ed0437dd33037bc32387c1cc",
"0x4acd838dadb9d07f3f1cfa2fe6123319e1f723c05a440da7f8a4a823f386034a",
"0x0de3353de4215b228d75019c266c47d619bfaf359ac07315bd0e452a40efcd01",
"0x64d576eb6622b27e86934e35219ca1d80ba22d99563ef8dfe9ea4b4f39f6e67a",
"0xcb7fe4e6aa82d761aaa1bea9bf0718a9686b28297bc000d195ce9c5d0e26b203",
"0x05fe0c1b34c9d3c4f0ebe16a8474678f8906c729c340cad1327d3aad20303a40"
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


