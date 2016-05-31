'use strict';

describe('Controller: Works', function() {
  beforeEach(module('portfolio'));

  var $controller;
  var worksResolver = [{
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
    }
  ];


  beforeEach(inject(function(_$controller_) {
    $controller = _$controller_;
  }));

	it('will have worksResolver', function () {
		var ctrl = $controller('WorksController', { worksResolver: worksResolver });

    expect(ctrl.works).to.equal(worksResolver);
    expect(ctrl.carouselPrev).to.be.a('function');
    expect(ctrl.carouselNext).to.be.a('function');
    expect(ctrl.counter).to.exist;
    expect(ctrl.status).to.exist;
	});
});
