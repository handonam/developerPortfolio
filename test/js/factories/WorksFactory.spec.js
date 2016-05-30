'use strict';

describe('Factory: WorksFactory', function() {
  beforeEach(module('portfolio'));

  var WorksFactory;
  var API_ROUTE;
  var $httpBackend;
  // TODO: Mock with real /api/works.json data
  var dataJson = [{
    "name": "TakeLessons",
    "statusId": 1,
    "url": "https://takelessons.com",
    "description": "A trusted online marketplace for finding qualified and vetted instructors.",
    "bgUrl": "/images/components/works/works__bg--takelessons.jpg",
    "accomplishments": [
      {
        "title": "Public facing redesign",
        "description": "We redesigned TakeLessons.com to help us increase our leads and conversion rates. It required us to build our own split test mechanism to throttle our traffic to the new design, monitoring conversion reports every hour. We had to move critical SEO links from this old site to maintain our organic traffic, while preventing duplicate pages on search engines.",
        "image": {
          "caption": "Before landing page redesign",
          "url": "/images/components/works/accomplishments/work__takelessons--publicredesign1.jpeg"
        },
        "tech": ["CSS3", "HTML5", "jQuery", "Symfony", "PHP", "Google Analytics"]
      }
    ]
  }];

  beforeEach(inject(function(_WorksFactory_, _$httpBackend_, _API_ROUTE_) {
    WorksFactory = _WorksFactory_;
    API_ROUTE = _API_ROUTE_;
    $httpBackend = _$httpBackend_;
  }));

  it('should return something', function() {
    $httpBackend.expectGET(API_ROUTE.WORKS).respond(dataJson);
      WorksFactory.getWorks().then(function(data) {
        expect(data.data[0]).to.have.all.keys(
          'name',
          'statusId',
          'url',
          'description',
          'bgUrl',
          'accomplishments'
        );
        expect(data.data[0].accomplishments[0]).to.have.all.keys(
          'title',
          'description',
          'image',
          'tech'
        );
      });

      $httpBackend.flush();
  });
})
