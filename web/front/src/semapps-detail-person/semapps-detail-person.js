Polymer({
  is: 'semapps-detail-person',
  properties: {},
  attached() {
    SemAppsCarto.ready(() => {
      semapps.initElementGlobals(this);
    });
    // Raw values.
    $.extend(this, this.data.properties);
    this.hasInterest = this.data.hasInterest;
    this.knows = this.data.knows;
    this.affiliatedTo = this.data.affiliatedTo;
    this.responsibleOf = this.data.responsibleOf;
    this.involvedIn = this.data.involvedIn;
    this.manages = this.data.manages;
    this.offers = this.data.offers;
    this.needs = this.data.needs;
    this.participantOf = this.data.participantOf;
    this.brainstorms = this.data.brainstorms;
    this.employedBy = this.data.employedBy;
      this.hasSubject = this.data.hasSubject;

      //log(this.data.building);
    //this.buildingTitle = semapps.buildings[this.data.building].title;
  },
    handleClickDetail(e) {
        e.preventDefault();
        semapps.goToPath('detail', {
            uri: window.encodeURIComponent(e.currentTarget.getAttribute('rel'))
        });
    },
    onClickThematic(e){
        e.preventDefault();
        let searchThemeFilter = document.getElementById('searchThemeFilter');
        searchThemeFilter.value = e.target.rel;
        //searchThemeFilter._activeChanged();
        semapps.goSearch();

    },
    handleClickRessource(e) {
        e.preventDefault();
        log('test');
        semapps.goToPath('ressource', {
            uri: window.encodeURIComponent(e.currentTarget.getAttribute('rel')),
            person: window.encodeURIComponent(this.uri)
        });
    },
});
