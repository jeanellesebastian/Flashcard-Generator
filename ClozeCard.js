// Create a ClozeCard constructor with two arguments: text and cloze
function ClozeCard (text, cloze) {
    this.fullText = text;
    this.cloze = cloze;
    this.partialText = this.fullText.replace(this.cloze, "...");
    
    // Confirms if the Cloze statement is in the full text .. if not then ..
    if (!this.fullText.match(this.cloze)){
        throw new Error("Sorry, " + this.cloze + " does not appear in the full text");
    }
}



console.log(">>>>> ClozeCard has LOADED!");

// Exports ClozeCard
module.exports = ClozeCard;