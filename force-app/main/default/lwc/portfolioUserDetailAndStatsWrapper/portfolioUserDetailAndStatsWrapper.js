import { LightningElement, api } from 'lwc';

export default class PortfolioUserDetailAndStatsWrapper extends LightningElement {

    @api recordId //= 'a09NS00000TTyT7YAL'
    @api objectApiName //= 'Protfolio__c'

    @api rank
    @api points
    @api badges
    @api trails
    @api resumeUrl

}