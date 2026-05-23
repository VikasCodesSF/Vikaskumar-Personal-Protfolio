import { LightningElement, api } from 'lwc';

export default class PortfolioUserDetail extends LightningElement {
    @api recordId;
    @api objectApiName;
    @api resumeUrl

    downloadResume(){
        window.open(this.resumeUrl,"_blank")
    }
    //https://raw.githubusercontent.com/VikasCodesSF/dummyResume/master/Raj_Vikaskumar_Resume.pdf
}