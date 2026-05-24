import { LightningElement,wire, api } from 'lwc';
import { getRecord } from 'lightning/uiRecordApi';
import SALESFORCECERTS from '@salesforce/schema/Protfolio__c.SalesforceCertification__c';
import OTHERCERTS from '@salesforce/schema/Protfolio__c.OtherCertification__c';
import PortfolioAssets from  '@salesforce/resourceUrl/PortfolioAssets';

const FIELDS = [
    SALESFORCECERTS,
    OTHERCERTS
];

export default class PortfolioCertifications extends LightningElement {

    salesforceCerts = []
    otherSkills = []

    certLogo= `${PortfolioAssets}/PortfolioAssets/cert_logo.png`;
    
        @api recordId;
    
        @wire(getRecord, { recordId: '$recordId', fields: FIELDS })
        certificationHandler({error, data}){
            if(data){
                console.log("Certification Data", JSON.stringify(data))
                this.formatCertification(data)
            }
            if(error){
                console.error("error", error);
            }
        }
    
        formatCertification(data){
            const{SalesforceCertification__c,OtherCertification__c } = data.fields
            this.salesforceCerts = SalesforceCertification__c ? SalesforceCertification__c.value.split(';').map(item=>{
                return `Salesforce Certified ${item}`
            }):[]
            this.otherSkills = OtherCertification__c ? OtherCertification__c.value.split(','):[]
        }
}