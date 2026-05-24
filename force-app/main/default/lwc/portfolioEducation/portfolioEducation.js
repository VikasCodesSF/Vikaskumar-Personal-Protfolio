import { LightningElement, wire, api } from 'lwc';
import { getRelatedListRecords } from 'lightning/uiRelatedListApi';

const COLUMNS = [
    { label: 'Education', fieldName: 'Title' },
    { label: 'Institution Name', fieldName: 'InstitutionName'},
    { label: 'Passing Year', fieldName: 'PassingYear' },
];

export default class PortfolioEducation extends LightningElement {

    @api recordId
        tableData = []
        columns = COLUMNS

        @wire(getRelatedListRecords, {
            parentRecordId:'$recordId',
            relatedListId: 'Educations__r',
            fields:['Education__c.InstitutionName__c',
                'Education__c.Title__c',
                'Education__c.PassingYear__c'
            ],
            sortBy:['Education__c.PassingYear__c']
        })educationHandler({data, error}){
            if (error){
                console.error('error',error)
            }
            if (data){
                console.error('data',JSON.stringify(data))
                this.formatEducation(data);
            }
        }

        formatEducation(data){
        this.tableData = [...data.records].reverse().map(item=>{
            let id = item.id
            const {InstitutionName__c,Title__c, PassingYear__c} = item.fields

            let InstitutionName = this.getValue(InstitutionName__c)
            let Title = this.getValue(Title__c)
            let PassingYear = this.getValue(PassingYear__c)

            return {id, InstitutionName, Title, PassingYear}

        })

         console.log('workExperienceList', JSON.stringify(this.tableData))
    }

    getValue(data){
        return data && (data.displayValue || data.value)
    }
}