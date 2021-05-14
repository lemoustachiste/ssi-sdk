export const document = {
  '@context': ['http://schema.org', 'https://ns.did.ai/suites/secp256k1-2019/v1'],
  '@type': 'Person',
  name: 'Bob Belcher',
}

export const publicKeyPair = {
  '@context': 'https://ns.did.ai/suites/secp256k1-2019/v1',
  id: 'did:example:signer#123',
  type: 'EcdsaSecp256k1VerificationKey2019',
  controller: 'did:example:signer',
  publicKeyBase58: 'cY3XbJUu1pz9VU18qTU12pXmvi5rVohUSpekndrnM1Vt',
}

export const privateKeyPair = {
  '@context': 'https://ns.did.ai/suites/secp256k1-2019/v1',
  id: 'did:example:signer#123',
  type: 'EcdsaSecp256k1VerificationKey2019',
  controller: 'did:example:signer',
  publicKeyBase58: 'cY3XbJUu1pz9VU18qTU12pXmvi5rVohUSpekndrnM1Vt',
  privateKeyBase58: 'E8HCuTCVWHSAZSobCqFrriv7vMWhfbRLCU1YT9Upm625',
}
