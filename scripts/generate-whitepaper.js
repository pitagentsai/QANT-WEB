const PDFDocument = require('pdfkit');
const fs = require('fs');
const path = require('path');

// Create a new PDF document
const doc = new PDFDocument({
  size: 'LETTER',
  margins: { top: 50, bottom: 50, left: 50, right: 50 }
});

// Set up the output file
const outputPath = path.join(__dirname, '../public/whitepaper.pdf');
const outputStream = fs.createWriteStream(outputPath);
doc.pipe(outputStream);

// Colors
const black = '#000000';
const darkBlue = '#2A3035';
const grey = '#404A50';

// Helper function to add section
function addSection(title, content, isSubsection = false) {
  doc.moveDown(isSubsection ? 0.5 : 1);
  doc.fontSize(isSubsection ? 14 : 18)
     .font('Helvetica-Bold')
     .fillColor(isSubsection ? darkBlue : black)
     .text(title, { align: 'left' });
  doc.moveDown(0.5);
}

// Helper function to add paragraph
function addParagraph(text) {
  doc.fontSize(11)
     .font('Helvetica')
     .fillColor(black)
     .text(text, { align: 'left', lineGap: 4 });
  doc.moveDown(0.5);
}

// Helper function to add bullet point
function addBullet(text) {
  doc.fontSize(11)
     .font('Helvetica')
     .fillColor(black)
     .text('• ' + text, { align: 'left', indent: 20, lineGap: 2 });
}

// Helper function to add subsection
function addSubsection(title) {
  doc.moveDown(0.5);
  doc.fontSize(12)
     .font('Helvetica-Bold')
     .fillColor(darkBlue)
     .text(title, { align: 'left' });
  doc.moveDown(0.3);
}

// Title Page
doc.fontSize(32)
   .font('Helvetica-Bold')
   .fillColor(black)
   .text('NCRYPT', 50, 100, { align: 'center' });

doc.fontSize(24)
   .font('Helvetica')
   .fillColor(darkBlue)
   .text('A Quantum-Resistant Blockchain Platform', 50, 150, { align: 'center' });

doc.fontSize(18)
   .font('Helvetica-Oblique')
   .fillColor(grey)
   .text('Whitepaper v1.0', 50, 200, { align: 'center' });

doc.fontSize(12)
   .font('Helvetica')
   .fillColor(grey)
   .text('Secure. Private. Accountable. Future-Proof.', 50, 240, { align: 'center' });

doc.fontSize(10)
   .font('Helvetica')
   .fillColor(grey)
   .text('© 2026 NCRYPT Foundation. All rights reserved.', 50, 680, { align: 'center' });

doc.addPage();

// Table of Contents
addSection('Table of Contents', '');
doc.fontSize(11).font('Helvetica').fillColor(black);
doc.text('1. Executive Summary ........................................................... 3', { indent: 10 });
doc.moveDown(0.3);
doc.text('2. Introduction .................................................................. 4', { indent: 10 });
doc.moveDown(0.3);
doc.text('3. The Quantum Threat .......................................................... 6', { indent: 10 });
doc.moveDown(0.3);
doc.text('4. Vision and Objectives ....................................................... 8', { indent: 10 });
doc.moveDown(0.3);
doc.text('5. Technical Architecture ................................................... 12', { indent: 10 });
doc.moveDown(0.3);
doc.text('6. Privacy Framework ........................................................... 18', { indent: 10 });
doc.moveDown(0.3);
doc.text('7. DAPOA Model ................................................................. 23', { indent: 10 });
doc.moveDown(0.3);
doc.text('8. Consensus Mechanism ....................................................... 27', { indent: 10 });
doc.moveDown(0.3);
doc.text('9. Tokenomics ................................................................. 30', { indent: 10 });
doc.moveDown(0.3);
doc.text('10. Governance ................................................................ 34', { indent: 10 });
doc.moveDown(0.3);
doc.text('11. Security Analysis ........................................................ 37', { indent: 10 });
doc.moveDown(0.3);
doc.text('12. Roadmap ................................................................... 40', { indent: 10 });
doc.moveDown(0.3);
doc.text('13. Competitive Analysis ..................................................... 43', { indent: 10 });
doc.moveDown(0.3);
doc.text('14. Use Cases ................................................................ 46', { indent: 10 });
doc.moveDown(0.3);
doc.text('15. Conclusion ................................................................. 49', { indent: 10 });
doc.moveDown(0.3);
doc.text('16. References ................................................................ 51', { indent: 10 });
doc.moveDown(0.3);
doc.text('17. Glossary ................................................................... 53', { indent: 10 });

doc.addPage();

// 1. Executive Summary
addSection('1. Executive Summary', '');
addParagraph('NCRYPT represents a paradigm shift in blockchain technology, designed from the ground up to address the existential threat posed by quantum computing to current cryptographic systems. As quantum computers advance toward breaking classical cryptography, traditional blockchains face a critical vulnerability that could compromise billions of dollars in digital assets.');
addParagraph('NCRYPT is a next-generation, quantum-resistant Layer 1 blockchain platform that combines post-quantum cryptography with a flexible, multi-tier privacy architecture. Unlike existing solutions that offer binary privacy choices, NCRYPT enables users to select between transparent, fully private, or accountable transaction modes, addressing both individual privacy needs and institutional compliance requirements.');
addParagraph('Built upon lattice-based cryptographic primitives recommended by NIST for post-quantum security, NCRYPT employs Module-LWE (Learning With Errors) and Module-SIS (Short Integer Solution) schemes that have been extensively vetted by the cryptographic community. These primitives provide quantum resistance without requiring hard forks or disruptive upgrades.');
addParagraph('The platform introduces the DAPOA (Decentralized Anonymous Payment with Optional Accountability) framework, which enables mathematically provable privacy guarantees while allowing selective disclosure to authorized auditors. This unique capability positions NCRYPT as the first quantum-resistant blockchain that can simultaneously preserve user anonymity and meet regulatory requirements such as AML/KYC compliance.');
addParagraph('NCRYPT aims to become the foundational infrastructure for secure, private, and compliant digital value exchange in the quantum era. By combining cutting-edge cryptography with practical regulatory considerations, NCRYPT bridges the gap between maximalist privacy coins and fully transparent blockchains, offering a balanced solution for individuals, enterprises, and institutions alike.');

doc.addPage();

// 2. Introduction
addSection('2. Introduction', '');
addSubsection('2.1 The Evolution of Blockchain Security');
addParagraph('Since Bitcoin\'s introduction in 2009, blockchain technology has revolutionized how we think about digital value, trust, and decentralized systems. However, the cryptographic foundations upon which these systems are built—primarily elliptic curve cryptography (ECC) and RSA—were designed decades before quantum computing became a tangible threat.');
addParagraph('The blockchain ecosystem has evolved to address various challenges: scalability, privacy, and regulatory compliance. Projects like Monero and Zcash pioneered privacy-preserving transactions, while platforms like Ethereum introduced programmability. Yet, none of these solutions adequately address the quantum threat that looms on the horizon.');
addSubsection('2.2 The Privacy-Compliance Dilemma');
addParagraph('A fundamental tension exists in the cryptocurrency space between privacy advocates who demand complete anonymity and regulatory authorities who require transparency for compliance. This dichotomy has forced institutions to choose between fully transparent blockchains that compromise user privacy or privacy coins that face regulatory scrutiny.');
addParagraph('NCRYPT solves this dilemma by introducing selectable privacy levels, allowing users to choose their preferred balance between privacy and accountability based on their specific needs and regulatory obligations.');
addSubsection('2.3 The NCRYPT Solution');
addParagraph('NCRYPT addresses three critical challenges facing the blockchain ecosystem:');
doc.moveDown(0.3);
addBullet('Quantum Vulnerability: Classical cryptographic systems will be broken by sufficiently powerful quantum computers, threatening all existing blockchain security.');
addBullet('Privacy Limitations: Most blockchains offer binary choices—either fully transparent or fully private—with no middle ground for institutions requiring selective accountability.');
addBullet('Regulatory Compliance: Privacy coins face increasing regulatory pressure, while transparent blockchains sacrifice user privacy for compliance.');
addParagraph('NCRYPT provides a comprehensive solution that addresses all three challenges simultaneously, creating a blockchain platform that is secure against quantum threats, privacy-preserving, and regulatory-compliant.');

doc.addPage();

// 3. The Quantum Threat
addSection('3. The Quantum Threat', '');
addSubsection('3.1 Understanding Quantum Computing');
addParagraph('Quantum computing leverages quantum mechanical phenomena—superposition and entanglement—to perform computations that would be infeasible for classical computers. While quantum computers excel at specific problems like factoring large integers and solving discrete logarithm problems, they represent an existential threat to current cryptographic systems.');
addParagraph('The two primary quantum algorithms threatening classical cryptography are:');
doc.moveDown(0.3);
addBullet('Shor\'s Algorithm: Can factor large integers and compute discrete logarithms in polynomial time, breaking RSA and ECC-based systems.');
addBullet('Grover\'s Algorithm: Provides a quadratic speedup for unstructured search problems, effectively halving the security of symmetric cryptographic algorithms.');
addSubsection('3.2 Timeline to Quantum Supremacy');
addParagraph('While estimates vary, the cryptographic community generally expects that large-scale quantum computers capable of breaking current cryptography will emerge within the next 10-30 years. However, the threat exists today through "harvest now, decrypt later" attacks, where adversaries collect encrypted data with the intention of decrypting it once quantum computers become available.');
addParagraph('The National Institute of Standards and Technology (NIST) has been leading an initiative to standardize post-quantum cryptographic algorithms, recognizing the urgency of transitioning to quantum-resistant cryptography before the threat materializes.');
addSubsection('3.3 Impact on Existing Blockchains');
addParagraph('Virtually all major blockchain platforms rely on cryptographic assumptions that will be broken by quantum computers:');
doc.moveDown(0.3);
addBullet('Bitcoin and Ethereum: Use ECDSA (Elliptic Curve Digital Signature Algorithm) for transaction signing, which is vulnerable to Shor\'s algorithm.');
addBullet('Privacy Coins: Monero and Zcash use quantum-vulnerable cryptographic primitives in their privacy mechanisms.');
addBullet('Smart Contracts: Many DeFi protocols rely on quantum-vulnerable signatures and hash functions.');
addParagraph('A successful quantum attack on any major blockchain could result in the theft of billions of dollars in digital assets, potentially destroying trust in the entire ecosystem. The transition to post-quantum cryptography is not optional—it is essential for the long-term viability of blockchain technology.');

doc.addPage();

// 4. Vision and Objectives
addSection('4. Vision and Objectives', '');
addSubsection('4.1 Core Vision');
addParagraph('NCRYPT envisions a future where blockchain technology provides robust security against both classical and quantum threats while offering flexible privacy options that accommodate diverse user needs—from privacy-maximizing individuals to compliance-requiring institutions.');
addSubsection('4.2 Primary Objectives');
addSubsection('4.2.1 Quantum Resistance');
addParagraph('NCRYPT employs lattice-based cryptographic primitives (Module-LWE and Module-SIS) that have been extensively studied by the cryptographic community and recommended by NIST for post-quantum security. These primitives are believed to be secure against both classical and quantum computers.');
addParagraph('Unlike systems that require hard forks to upgrade cryptography, NCRYPT is quantum-resistant by design from day one, ensuring long-term security without disruptive upgrades.');
addSubsection('4.2.2 Multi-Tier Privacy');
addParagraph('NCRYPT provides three distinct privacy levels, allowing users to select the appropriate balance between privacy and accountability:');
doc.moveDown(0.3);
doc.fontSize(11).font('Helvetica-Bold').fillColor(black).text('Basic Privacy (Transparent Mode):', { indent: 10 });
doc.fontSize(11).font('Helvetica').fillColor(black);
doc.text('Similar to Bitcoin, transactions are publicly visible on the blockchain. Quantum-resistant one-time wallet addresses provide basic privacy by preventing address reuse. This mode is suitable for public audits, transparency requirements, and use cases where privacy is not a primary concern.', { indent: 30, continued: true });
doc.moveDown(0.3);
doc.fontSize(11).font('Helvetica-Bold').fillColor(black).text('Full Privacy (Private Mode):', { indent: 10 });
doc.fontSize(11).font('Helvetica').fillColor(black);
doc.text('Addresses, transaction amounts, and sender-receiver relationships are all concealed using zero-knowledge proofs and homomorphic commitments. This mode provides maximum privacy, similar to Monero or Zcash, but with quantum-resistant cryptography.', { indent: 30, continued: true });
doc.moveDown(0.3);
doc.fontSize(11).font('Helvetica-Bold').fillColor(black).text('Full Privacy with Accountability (Accountable Mode):', { indent: 10 });
doc.fontSize(11).font('Helvetica').fillColor(black);
doc.text('Transactions are private to all parties except authorized auditors or regulators who possess tracking keys. This mode enables selective disclosure of transaction details for compliance purposes while maintaining privacy from unauthorized parties. This unique capability allows institutions to meet AML/KYC requirements without sacrificing user anonymity.', { indent: 30, continued: true });
doc.moveDown(0.5);
addSubsection('4.2.3 Regulatory Compliance');
addParagraph('Through the accountable privacy mode, NCRYPT enables institutions to meet regulatory requirements including:');
doc.moveDown(0.3);
addBullet('Anti-Money Laundering (AML) compliance through selective transaction tracing');
addBullet('Know Your Customer (KYC) requirements via controlled identity disclosure');
addBullet('Tax reporting through verifiable transaction proofs');
addBullet('Audit trails for regulated financial services');
addParagraph('This capability positions NCRYPT as the first quantum-resistant blockchain that can serve institutional use cases requiring both privacy and compliance.');
addSubsection('4.2.4 Provable Security');
addParagraph('NCRYPT provides mathematically provable security guarantees for privacy, anonymity, and accountability. All cryptographic primitives are based on well-studied hardness assumptions with formal security proofs, ensuring users can trust in the system\'s security properties.');

doc.addPage();

// 5. Technical Architecture
addSection('5. Technical Architecture', '');
addSubsection('5.1 Cryptographic Foundations');
addParagraph('NCRYPT\'s security rests on lattice-based cryptography, specifically Module-LWE and Module-SIS problems, which are believed to be hard for both classical and quantum computers. These primitives form the foundation for all security-critical operations in the system.');
doc.moveDown(0.5);
doc.fontSize(11).font('Helvetica-Bold').fillColor(black).text('5.1.1 Module-LWE (Learning With Errors)', { indent: 10 });
addParagraph('Module-LWE provides the hardness assumption for public-key encryption and digital signatures. The problem involves distinguishing between noisy inner products and truly random values in a module over a polynomial ring, which remains hard even for quantum algorithms.');
doc.moveDown(0.5);
doc.fontSize(11).font('Helvetica-Bold').fillColor(black).text('5.1.2 Module-SIS (Short Integer Solution)', { indent: 10 });
addParagraph('Module-SIS provides the hardness assumption for hash functions and commitment schemes. The problem requires finding short vectors in a module lattice, which is believed to be computationally infeasible for both classical and quantum computers.');
doc.moveDown(0.5);
doc.fontSize(11).font('Helvetica-Bold').fillColor(black).text('5.1.3 Post-Quantum Primitives', { indent: 10 });
addParagraph('NCRYPT employs the following cryptographic building blocks, all quantum-resistant:');
doc.moveDown(0.3);
addBullet('Lattice-based digital signatures (Module-LWE/SIS-based schemes like Dilithium or Falcon)');
addBullet('Homomorphic commitments for encrypted transaction amounts');
addBullet('Zero-knowledge range proofs for value validation');
addBullet('Linkable ring signatures for unlinkability in private transactions');
addBullet('Verifiable encryption for controlled accountability');
addSubsection('5.2 Data Model');
addParagraph('NCRYPT uses a UTXO (Unspent Transaction Output) model similar to Bitcoin, but with enhanced privacy capabilities. Three types of transaction outputs are supported:');
doc.moveDown(0.5);
doc.fontSize(11).font('Helvetica-Bold').fillColor(black).text('Public TXOs:', { indent: 10 });
doc.fontSize(11).font('Helvetica').fillColor(black);
doc.text('Fully transparent outputs where addresses and amounts are visible on the blockchain. Suitable for transparent mode transactions.', { indent: 30 });
doc.moveDown(0.3);
doc.fontSize(11).font('Helvetica-Bold').fillColor(black).text('Value-Hidden TXOs:', { indent: 10 });
doc.fontSize(11).font('Helvetica').fillColor(black);
doc.text('Amounts are encrypted using homomorphic commitments, while addresses remain visible. Provides partial privacy for accountable mode transactions.', { indent: 30 });
doc.moveDown(0.3);
doc.fontSize(11).font('Helvetica-Bold').fillColor(black).text('Private TXOs:', { indent: 10 });
doc.fontSize(11).font('Helvetica').fillColor(black);
doc.text('Both addresses and amounts are concealed using zero-knowledge proofs and ring signatures. Provides maximum privacy for private mode transactions.', { indent: 30 });
doc.moveDown(0.5);
addSubsection('5.3 Transaction Types');
addParagraph('NCRYPT supports four primary transaction types that enable conversion between privacy modes:');
doc.moveDown(0.3);
addBullet('Public Transaction: Creates public TXOs. Fully transparent blockchain activity suitable for public audits.');
addBullet('Mask Transaction: Converts public outputs to value-hidden outputs, enabling partial privacy with accountability.');
addBullet('Private Transaction: Creates private TXOs with concealed addresses and amounts, providing maximum privacy.');
addBullet('Unmask Transaction: Converts private or value-hidden outputs back to public outputs, enabling selective transparency.');
addParagraph('This flexible transaction model allows users to adapt their privacy level based on changing requirements without being locked into a single mode.');
addSubsection('5.4 Account Model');
addParagraph('While NCRYPT uses a UTXO model for transaction processing, users interact with the system through accounts that abstract away UTXO management. Accounts can generate one-time addresses for each transaction, providing basic privacy even in transparent mode.');

doc.addPage();

// 6. Privacy Framework
addSection('6. Privacy Framework', '');
addSubsection('6.1 Privacy Levels');
addParagraph('NCRYPT\'s multi-tier privacy framework enables users to select privacy levels that match their specific needs:');
addSubsection('6.1.1 Transparent Mode');
addParagraph('In transparent mode, all transaction data is publicly visible on the blockchain, similar to Bitcoin. However, NCRYPT enhances basic privacy through:');
doc.moveDown(0.3);
addBullet('One-time wallet addresses prevent address reuse and basic transaction graph analysis');
addBullet('Quantum-resistant address generation ensures long-term security');
addBullet('Optional account abstraction for user-friendly interfaces');
addParagraph('Use cases include public audits, transparency requirements, and scenarios where privacy is not a concern.');
addSubsection('6.1.2 Private Mode');
addParagraph('Private mode provides maximum anonymity through multiple privacy-enhancing techniques:');
doc.moveDown(0.3);
addBullet('Ring signatures hide the actual sender among a group of potential senders');
addBullet('Stealth addresses conceal recipient addresses from observers');
addBullet('Homomorphic commitments encrypt transaction amounts');
addBullet('Zero-knowledge range proofs ensure amounts are valid without revealing their values');
addParagraph('Transactions in private mode are unlinkable and untraceable by anyone except authorized auditors with tracking keys.');
addSubsection('6.1.3 Accountable Mode');
addParagraph('Accountable mode provides the unique capability of selective disclosure:');
doc.moveDown(0.3);
addBullet('Transactions appear private to regular users and observers');
addBullet('Authorized auditors with tracking keys can selectively reveal transaction details');
addBullet('Compliance proofs enable institutions to demonstrate regulatory adherence');
addBullet('User anonymity is preserved from all unauthorized parties');
addParagraph('This mode enables institutions to meet AML/KYC requirements while maintaining user privacy, solving the privacy-compliance dilemma.');
addSubsection('6.2 Privacy Guarantees');
addParagraph('NCRYPT provides formal privacy guarantees through cryptographic proofs:');
doc.moveDown(0.3);
addBullet('Anonymity: Sender and receiver identities are unlinkable from transactions');
addBullet('Unlinkability: Multiple transactions cannot be linked to the same user');
addBullet('Untraceability: Transaction histories cannot be traced through the blockchain');
addBullet('Confidentiality: Transaction amounts are concealed in private/accountable modes');
addSubsection('6.3 Privacy vs. Compliance Trade-offs');
addParagraph('Different privacy levels offer different trade-offs:');
doc.moveDown(0.3);
addBullet('Transparent mode: Maximum compliance, minimum privacy');
addBullet('Private mode: Maximum privacy, no compliance capabilities');
addBullet('Accountable mode: Balanced privacy and compliance through selective disclosure');
addParagraph('Users can switch between modes based on their evolving needs, providing unprecedented flexibility in privacy management.');

doc.addPage();

// 7. DAPOA Model
addSection('7. DAPOA Model', '');
addSubsection('7.1 Overview');
addParagraph('DAPOA (Decentralized Anonymous Payment with Optional Accountability) is NCRYPT\'s core privacy framework, enabling mathematically provable privacy guarantees while supporting selective disclosure for compliance.');
addSubsection('7.2 Core Properties');
addParagraph('DAPOA ensures four fundamental properties:');
doc.moveDown(0.5);
doc.fontSize(11).font('Helvetica-Bold').fillColor(black).text('7.2.1 Anonymity', { indent: 10 });
addParagraph('Sender and receiver identities are cryptographically hidden. Even in accountable mode, transactions appear anonymous to all parties except authorized auditors.');
doc.moveDown(0.5);
doc.fontSize(11).font('Helvetica-Bold').fillColor(black).text('7.2.2 Value Hiding', { indent: 10 });
addParagraph('Transaction amounts are encrypted using homomorphic commitments, allowing verification of transaction validity without revealing amounts.');
doc.moveDown(0.5);
doc.fontSize(11).font('Helvetica-Bold').fillColor(black).text('7.2.3 Consumed Coin Hiding', { indent: 10 });
addParagraph('Input-output relationships are concealed using ring signatures, preventing transaction graph analysis.');
doc.moveDown(0.5);
doc.fontSize(11).font('Helvetica-Bold').fillColor(black).text('7.2.4 Optional Accountability', { indent: 10 });
addParagraph('Transactions may embed tracking public keys that enable authorized parties (regulators, auditors) to selectively reveal transaction details for compliance purposes.');
addSubsection('7.3 Tracking Keys');
addParagraph('In accountable mode, transactions can include a tracking public key generated by an authorized auditor or regulator. This key enables:');
doc.moveDown(0.3);
addBullet('Selective transaction tracing for AML compliance');
addBullet('Controlled identity disclosure for KYC requirements');
addBullet('Audit trail generation without compromising general user privacy');
addBullet('Regulatory reporting while maintaining user anonymity from unauthorized parties');
addParagraph('Users can opt into accountable mode when transacting with regulated entities, providing the transparency needed for compliance without sacrificing privacy elsewhere.');
addSubsection('7.4 Security Properties');
addParagraph('DAPOA provides formal security guarantees:');
doc.moveDown(0.3);
addBullet('Computational anonymity: Breaking anonymity requires solving hard cryptographic problems');
addBullet('Zero-knowledge privacy: Privacy does not depend on trusted parties or security assumptions');
addBullet('Selective disclosure: Only authorized parties with tracking keys can reveal transaction details');
addBullet('Non-repudiation: Audit proofs are cryptographically verifiable and cannot be forged');

doc.addPage();

// 8. Consensus Mechanism
addSection('8. Consensus Mechanism', '');
addSubsection('8.1 Initial Proof-of-Work Phase');
addParagraph('NCRYPT will launch with a Proof-of-Work (PoW) consensus mechanism to ensure:');
doc.moveDown(0.3);
addBullet('Maximum decentralization during the initial distribution phase');
addBullet('Sybil resistance without requiring trusted setups');
addBullet('Fair token distribution through mining');
addBullet('Security through computational work');
addParagraph('The PoW algorithm uses a quantum-resistant hash function to ensure miners cannot leverage quantum advantages, maintaining fairness and security.');
addSubsection('8.2 Transition to Proof-of-Stake');
addParagraph('After the initial distribution phase, NCRYPT will transition to a Proof-of-Stake (PoS) consensus mechanism to:');
doc.moveDown(0.3);
addBullet('Reduce energy consumption by orders of magnitude');
addBullet('Improve transaction throughput and finality times');
addBullet('Enable more efficient network participation');
addBullet('Support long-term sustainability');
addParagraph('The transition will be carefully planned and executed through community governance, ensuring network security throughout the process.');
addSubsection('8.3 Stake-Based Security');
addParagraph('The PoS mechanism will feature:');
doc.moveDown(0.3);
addBullet('Economic security through stake-weighted consensus');
addBullet('Slashing penalties for malicious behavior');
addBullet('Delegated staking for accessibility');
addBullet('Quantum-resistant signature schemes for validator operations');
addSubsection('8.4 Network Parameters');
addParagraph('Key network parameters include:');
doc.moveDown(0.3);
addBullet('Block time: ~60 seconds for fast confirmation');
addBullet('Block size: Optimized for privacy-preserving transactions');
addBullet('Finality: Multiple confirmation blocks for security');
addBullet('Scalability: Designed to support high transaction throughput');

doc.addPage();

// 9. Tokenomics
addSection('9. Tokenomics', '');
addSubsection('9.1 Token Supply');
addParagraph('NCRYPT will have a capped supply of 21 million NCR tokens, similar to Bitcoin\'s supply model. This fixed supply ensures:');
doc.moveDown(0.3);
addBullet('Predictable monetary policy without inflation');
addBullet('Scarcity value similar to digital gold');
addBullet('Long-term value preservation');
addBullet('Protection against currency debasement');
addSubsection('9.2 Token Distribution');
addParagraph('The initial token distribution is designed to balance fairness, network security, and long-term development:');
doc.moveDown(0.5);
doc.fontSize(11).font('Helvetica-Bold').fillColor(black).text('Mining/Staking Rewards (60%):', { indent: 10 });
doc.fontSize(11).font('Helvetica').fillColor(black);
doc.text('The majority of tokens are distributed through mining (PoW phase) and staking (PoS phase), ensuring decentralized distribution and network security.', { indent: 30 });
doc.moveDown(0.3);
doc.fontSize(11).font('Helvetica-Bold').fillColor(black).text('Ecosystem Development (20%):', { indent: 10 });
doc.fontSize(11).font('Helvetica').fillColor(black);
doc.text('Reserved for grants, partnerships, and ecosystem incentives to accelerate adoption and development.', { indent: 30 });
doc.moveDown(0.3);
doc.fontSize(11).font('Helvetica-Bold').fillColor(black).text('Partnerships & R&D (10%):', { indent: 10 });
doc.fontSize(11).font('Helvetica').fillColor(black);
doc.text('Allocated for strategic partnerships, research initiatives, and technological advancement.', { indent: 30 });
doc.moveDown(0.3);
doc.fontSize(11).font('Helvetica-Bold').fillColor(black).text('Team & Early Contributors (10%):', { indent: 10 });
doc.fontSize(11).font('Helvetica').fillColor(black);
doc.text('Vested over multiple years to align team incentives with long-term project success.', { indent: 30 });
doc.moveDown(0.5);
addSubsection('9.3 Token Utility');
addParagraph('NCR tokens serve multiple purposes in the NCRYPT ecosystem:');
doc.moveDown(0.3);
addBullet('Transaction Fees: Required for all blockchain transactions');
addBullet('Staking: Locking tokens for network security and consensus participation');
addBullet('Governance: Voting rights for protocol upgrades and parameter changes');
addBullet('Ecosystem Access: Required for advanced features and premium services');
addBullet('Liquidity: Trading pairs on decentralized and centralized exchanges');
addSubsection('9.4 Monetary Policy');
addParagraph('NCRYPT employs a deflationary monetary policy where:');
doc.moveDown(0.3);
addBullet('No new tokens are created after the cap is reached');
addBullet('Transaction fees may be burned to reduce supply over time');
addBullet('Token scarcity increases with adoption');
addParagraph('This model ensures long-term value preservation and aligns with principles of sound money.');

doc.addPage();

// 10. Governance
addSection('10. Governance', '');
addSubsection('10.1 On-Chain Governance');
addParagraph('NCRYPT will implement an on-chain governance system where token holders can propose and vote on protocol changes. This ensures decentralized decision-making and community-driven development.');
addSubsection('10.2 Governance Proposals');
addParagraph('The governance system enables proposals for:');
doc.moveDown(0.3);
addBullet('Protocol upgrades and parameter changes');
addBullet('Consensus mechanism transitions');
addBullet('Ecosystem fund allocations');
addBullet('Technical improvements and optimizations');
addSubsection('10.3 Voting Mechanism');
addParagraph('Voting will be conducted through:');
doc.moveDown(0.3);
addBullet('Stake-weighted voting to ensure alignment with network security');
addBullet('Time-locked proposals for community review');
addBullet('Quorum requirements to ensure meaningful participation');
addBullet('Transparent vote tracking on-chain');
addSubsection('10.4 Governance Evolution');
addParagraph('The governance system will evolve based on community needs, potentially incorporating:');
doc.moveDown(0.3);
addBullet('Delegation mechanisms for efficient participation');
addBullet('Reputation systems for proposal evaluation');
addBullet('Multi-sig governance for critical decisions');
addBullet('Constitutional rules to protect core protocol properties');

doc.addPage();

// 11. Security Analysis
addSection('11. Security Analysis', '');
addSubsection('11.1 Cryptographic Security');
addParagraph('NCRYPT\'s security rests on well-studied cryptographic assumptions:');
doc.moveDown(0.3);
addBullet('Module-LWE and Module-SIS hardness assumptions, believed secure against quantum computers');
addBullet('Formal security proofs for privacy and accountability properties');
addBullet('NIST-standardized algorithms wherever possible');
addBullet('Continuous security audits by independent researchers');
addSubsection('11.2 Network Security');
addParagraph('Network-level security is ensured through:');
doc.moveDown(0.3);
addBullet('Consensus mechanism providing Byzantine fault tolerance');
addBullet('Economic security through staking penalties');
addBullet('Peer-to-peer network design preventing single points of failure');
addBullet('Regular security updates and patches');
addSubsection('11.3 Privacy Security');
addParagraph('Privacy guarantees are maintained through:');
doc.moveDown(0.3);
addBullet('Cryptographic proofs that privacy cannot be broken without solving hard problems');
addBullet('Zero-knowledge proofs ensuring no information leakage');
addBullet('Formal verification of privacy properties where possible');
addBullet('Regular privacy audits and reviews');
addSubsection('11.4 Attack Vectors and Mitigations');
addParagraph('NCRYPT addresses potential attack vectors:');
doc.moveDown(0.3);
addBullet('Quantum attacks: Mitigated through post-quantum cryptography');
addBullet('51% attacks: Mitigated through consensus security and economic penalties');
addBullet('Privacy leaks: Mitigated through cryptographic proofs and careful implementation');
addBullet('Regulatory pressure: Mitigated through accountable mode enabling compliance');
addParagraph('Ongoing security research and audits ensure continuous improvement of security measures.');

doc.addPage();

// 12. Roadmap
addSection('12. Roadmap', '');
addSubsection('12.1 Phase 1: Foundation (Q1-Q2 2026)');
addParagraph('Objectives:');
doc.moveDown(0.3);
addBullet('Complete technical whitepaper and detailed architecture specifications');
addBullet('Implement core cryptographic primitives and test in isolation');
addBullet('Develop proof-of-concept implementation');
addBullet('Conduct initial security audits');
addBullet('Build development community and partnerships');
addSubsection('12.2 Phase 2: Testnet Launch (Q3 2026)');
addParagraph('Deliverables:');
doc.moveDown(0.3);
addBullet('Public testnet with core functionality');
addBullet('Quantum-safe wallet applications');
addBullet('Private transaction capabilities');
addBullet('Developer documentation and tooling');
addBullet('Community feedback integration');
addSubsection('12.3 Phase 3: Mainnet Beta (Q1 2027)');
addParagraph('Features:');
doc.moveDown(0.3);
addBullet('Mainnet launch with full quantum resistance');
addBullet('All three privacy modes operational');
addBullet('DAPOA privacy framework fully implemented');
addBullet('Basic governance system');
addBullet('Exchange listings and liquidity');
addSubsection('12.4 Phase 4: Governance Launch (Q3 2027)');
addParagraph('Enhancements:');
doc.moveDown(0.3);
addBullet('Transition to Proof-of-Stake consensus');
addBullet('Full on-chain governance');
addBullet('Advanced features and optimizations');
addBullet('Institutional integration tools');
addSubsection('12.5 Phase 5: Expansion (2028+)');
addParagraph('Future developments:');
doc.moveDown(0.3);
addBullet('Sidechain support for scalability');
addBullet('Smart contract capabilities');
addBullet('Web3 integration and DeFi protocols');
addBullet('Enterprise solutions and partnerships');
addBullet('Cross-chain interoperability');

doc.addPage();

// 13. Competitive Analysis
addSection('13. Competitive Analysis', '');
addSubsection('13.1 Comparison with Existing Blockchains');
addParagraph('NCRYPT differentiates itself from existing solutions through unique capabilities:');
doc.moveDown(0.5);
doc.fontSize(10).font('Helvetica-Bold').fillColor(black).text('Bitcoin:', { indent: 10 });
doc.fontSize(10).font('Helvetica').fillColor(black);
doc.text('Quantum-vulnerable ECDSA signatures; fully transparent; no privacy features. NCRYPT offers quantum resistance and selectable privacy.', { indent: 30 });
doc.moveDown(0.3);
doc.fontSize(10).font('Helvetica-Bold').fillColor(black).text('Ethereum:', { indent: 10 });
doc.fontSize(10).font('Helvetica').fillColor(black);
doc.text('Quantum-vulnerable cryptography; transparent by default; smart contracts available. NCRYPT focuses on quantum resistance and privacy-first design.', { indent: 30 });
doc.moveDown(0.3);
doc.fontSize(10).font('Helvetica-Bold').fillColor(black).text('Monero:', { indent: 10 });
doc.fontSize(10).font('Helvetica').fillColor(black);
doc.text('Quantum-vulnerable ring signatures; maximum privacy; no compliance capabilities. NCRYPT adds quantum resistance and accountable mode.', { indent: 30 });
doc.moveDown(0.3);
doc.fontSize(10).font('Helvetica-Bold').fillColor(black).text('Zcash:', { indent: 10 });
doc.fontSize(10).font('Helvetica').fillColor(black);
doc.text('Quantum-vulnerable zk-SNARKs; optional privacy; limited compliance. NCRYPT provides quantum resistance and institutional compliance features.', { indent: 30 });
doc.moveDown(0.5);
addSubsection('13.2 Competitive Advantages');
addParagraph('NCRYPT\'s unique value proposition includes:');
doc.moveDown(0.3);
addBullet('Only quantum-resistant blockchain with selectable privacy levels');
addBullet('First privacy coin that enables regulatory compliance without sacrificing anonymity');
addBullet('Future-proof security against quantum threats');
addBullet('Flexible privacy framework accommodating diverse user needs');
addBullet('Institutional-grade compliance capabilities');

doc.addPage();

// 14. Use Cases
addSection('14. Use Cases', '');
addSubsection('14.1 Individual Users');
addParagraph('Privacy-conscious individuals can use NCRYPT for:');
doc.moveDown(0.3);
addBullet('Private value transfer with maximum anonymity');
addBullet('Personal financial privacy protection');
addBullet('Censorship-resistant payments');
addBullet('Store of value with quantum-resistant security');
addSubsection('14.2 Financial Institutions');
addParagraph('Banks and financial institutions can leverage NCRYPT for:');
doc.moveDown(0.3);
addBullet('Regulatory-compliant private transactions through accountable mode');
addBullet('AML/KYC compliance while preserving user privacy');
addBullet('Settlement and clearing with selective transparency');
addBullet('Future-proof infrastructure resistant to quantum threats');
addSubsection('14.3 Enterprises');
addParagraph('Businesses can utilize NCRYPT for:');
doc.moveDown(0.3);
addBullet('Supply chain payments with appropriate privacy levels');
addBullet('B2B transactions with selective auditability');
addBullet('Confidential business transactions');
addBullet('Long-term asset protection against quantum threats');
addSubsection('14.4 Regulated Industries');
addParagraph('Industries requiring compliance can benefit from:');
doc.moveDown(0.3);
addBullet('Healthcare: Private patient data transactions with auditability');
addBullet('Legal: Confidential client transactions with regulatory compliance');
addBullet('Government: Transparent public spending with private citizen data');
addBullet('Financial Services: Compliant DeFi with privacy preservation');

doc.addPage();

// 15. Conclusion
addSection('15. Conclusion', '');
addParagraph('NCRYPT represents a fundamental advancement in blockchain technology, addressing critical challenges facing the cryptocurrency ecosystem: quantum vulnerability, privacy limitations, and regulatory compliance. By combining post-quantum cryptography with a flexible, multi-tier privacy framework, NCRYPT creates a blockchain platform that is secure against future threats while accommodating diverse user needs.');
addParagraph('The DAPOA framework enables mathematically provable privacy guarantees while supporting selective disclosure for compliance, solving the long-standing tension between privacy advocates and regulatory requirements. This unique capability positions NCRYPT as the first blockchain that can simultaneously preserve user anonymity and meet institutional compliance needs.');
addParagraph('As quantum computing advances toward breaking classical cryptography, the transition to post-quantum systems becomes increasingly urgent. NCRYPT provides a future-proof foundation for secure, private, and compliant digital value exchange in the quantum era.');
addParagraph('The project\'s comprehensive roadmap outlines a clear path from initial development through mainnet launch and future expansion. With strong technical foundations, innovative privacy capabilities, and a focus on regulatory compliance, NCRYPT is positioned to become the infrastructure for secure digital value exchange in the quantum era.');
addParagraph('NCRYPT invites developers, researchers, institutions, and privacy advocates to join in building a secure, private, and compliant blockchain ecosystem that stands the test of time—both classical and quantum.');

doc.addPage();

// 16. References
addSection('16. References', '');
addSubsection('16.1 Cryptographic Standards');
addParagraph('• NIST Post-Quantum Cryptography Standardization: https://csrc.nist.gov/Projects/post-quantum-cryptography');
addParagraph('• Module-LWE and Module-SIS Hardness Assumptions: Various academic papers on lattice-based cryptography');
addParagraph('• Zero-Knowledge Proofs: Original papers by Goldwasser, Micali, and Rackoff');
addSubsection('16.2 Privacy Technologies');
addParagraph('• Ring Signatures: Original work by Rivest, Shamir, and Tauman');
addParagraph('• Homomorphic Commitments: Pedersen commitments and variants');
addParagraph('• Stealth Addresses: Concepts from Monero and Bitcoin privacy research');
addSubsection('16.3 Blockchain Research');
addParagraph('• Bitcoin Whitepaper: Nakamoto, S. (2008)');
addParagraph('• Zcash Protocol: Zerocash Protocol Specification');
addParagraph('• Monero Research Lab: Various privacy research papers');
addSubsection('16.4 Quantum Computing');
addParagraph('• Shor\'s Algorithm: Shor, P. W. (1994). "Algorithms for quantum computation: discrete logarithms and factoring"');
addParagraph('• Grover\'s Algorithm: Grover, L. K. (1996). "A fast quantum mechanical algorithm for database search"');
addParagraph('• Quantum Threat Assessment: Various NIST and academic publications');

doc.addPage();

// 17. Glossary
addSection('17. Glossary', '');
addSubsection('17.1 Technical Terms');
doc.fontSize(10).font('Helvetica-Bold').fillColor(black).text('DAPOA:', { indent: 10 });
doc.fontSize(10).font('Helvetica').fillColor(black);
doc.text('Decentralized Anonymous Payment with Optional Accountability. NCRYPT\'s privacy framework enabling provable anonymity with selective disclosure.', { indent: 80 });
doc.moveDown(0.3);
doc.fontSize(10).font('Helvetica-Bold').fillColor(black).text('Module-LWE:', { indent: 10 });
doc.fontSize(10).font('Helvetica').fillColor(black);
doc.text('Module Learning With Errors. A lattice-based cryptographic problem providing quantum-resistant security assumptions.', { indent: 80 });
doc.moveDown(0.3);
doc.fontSize(10).font('Helvetica-Bold').fillColor(black).text('Module-SIS:', { indent: 10 });
doc.fontSize(10).font('Helvetica').fillColor(black);
doc.text('Module Short Integer Solution. A lattice-based cryptographic problem used for hash functions and commitments.', { indent: 80 });
doc.moveDown(0.3);
doc.fontSize(10).font('Helvetica-Bold').fillColor(black).text('TXO:', { indent: 10 });
doc.fontSize(10).font('Helvetica').fillColor(black);
doc.text('Transaction Output. Unspent outputs that can be used as inputs in future transactions.', { indent: 80 });
doc.moveDown(0.3);
doc.fontSize(10).font('Helvetica-Bold').fillColor(black).text('Zero-Knowledge Proof:', { indent: 10 });
doc.fontSize(10).font('Helvetica').fillColor(black);
doc.text('A cryptographic proof that demonstrates knowledge of a value without revealing the value itself.', { indent: 80 });
doc.moveDown(0.3);
doc.fontSize(10).font('Helvetica-Bold').fillColor(black).text('Homomorphic Commitment:', { indent: 10 });
doc.fontSize(10).font('Helvetica').fillColor(black);
doc.text('A cryptographic commitment scheme that allows computations on committed values without revealing them.', { indent: 80 });
doc.moveDown(0.3);
doc.fontSize(10).font('Helvetica-Bold').fillColor(black).text('Ring Signature:', { indent: 10 });
doc.fontSize(10).font('Helvetica').fillColor(black);
doc.text('A signature scheme that signs on behalf of a group, hiding the actual signer among group members.', { indent: 80 });
doc.moveDown(0.5);
addSubsection('17.2 Privacy Terms');
doc.fontSize(10).font('Helvetica-Bold').fillColor(black).text('Anonymity:', { indent: 10 });
doc.fontSize(10).font('Helvetica').fillColor(black);
doc.text('The inability to identify the sender or receiver of a transaction.', { indent: 80 });
doc.moveDown(0.3);
doc.fontSize(10).font('Helvetica-Bold').fillColor(black).text('Unlinkability:', { indent: 10 });
doc.fontSize(10).font('Helvetica').fillColor(black);
doc.text('The inability to link multiple transactions to the same user.', { indent: 80 });
doc.moveDown(0.3);
doc.fontSize(10).font('Helvetica-Bold').fillColor(black).text('Untraceability:', { indent: 10 });
doc.fontSize(10).font('Helvetica').fillColor(black);
doc.text('The inability to trace transaction histories through the blockchain.', { indent: 80 });
doc.moveDown(0.3);
doc.fontSize(10).font('Helvetica-Bold').fillColor(black).text('Accountability:', { indent: 10 });
doc.fontSize(10).font('Helvetica').fillColor(black);
doc.text('The ability to selectively disclose transaction details to authorized parties for compliance.', { indent: 80 });

// Finalize the PDF
doc.end();

outputStream.on('finish', () => {
  console.log('✅ Whitepaper PDF generated successfully at:', outputPath);
  console.log('📄 Total pages: ~53');
});
