import { LightningElement, wire, api } from 'lwc';
import { getRecord } from 'lightning/uiRecordApi';
import TECHNICAL_SKILLS_FIELD from '@salesforce/schema/Protfolio__c.TechnicalSkills__c';
import SOFT_SKILLS_FIELD from '@salesforce/schema/Protfolio__c.SoftSkills__c';
import SOFTWARE_TOOLS_FIELD from '@salesforce/schema/Protfolio__c.SoftwareTools__c';
import SOFTWARE_DEV_METHODOLOGIES_FIELD from '@salesforce/schema/Protfolio__c.SoftawreDevelopmentMethodologies__c';


const FIELDS = [
    TECHNICAL_SKILLS_FIELD,
    SOFT_SKILLS_FIELD,
    SOFTWARE_TOOLS_FIELD,
    SOFTWARE_DEV_METHODOLOGIES_FIELD
];

export default class PortfolioSkills extends LightningElement {
    techSkills = []
    softSkills = []
    softwareToolSkills = []
    softwareSkills = []

    @api recordId;

    @wire(getRecord, { recordId: '$recordId', fields: FIELDS })
    skillHandler({error, data}){
        if(data){
            console.log("Skills Data", JSON.stringify(data))
            this.formatSkills(data)
        }
        if(error){
            console.error("error", error);
        }
    }

    formatSkills(data){
        const{TechnicalSkills__c,SoftSkills__c,SoftwareTools__c,SoftawreDevelopmentMethodologies__c } = data.fields
        this.techSkills = TechnicalSkills__c ? TechnicalSkills__c.value.split(','):[]
        this.softSkills = SoftSkills__c ? SoftSkills__c.value.split(','):[]
        this.softwareToolSkills = SoftwareTools__c ? SoftwareTools__c.value.split(','):[]
        this.softwareSkills = SoftawreDevelopmentMethodologies__c ? SoftawreDevelopmentMethodologies__c.value.split(','):[]
    }

}