describe('P', function() {

  describe('instance', function() {
    beforeEach(function() {
      this.verifyFunction = function(obj, fn) {
        spyOn(obj, fn);
        obj[fn]();

        expect(obj[fn]).toHaveBeenCalled();
      };
    });

    it('should exist P object', function() {
      expect(P).toBeDefined();
    });

    it('should exist init function in P object', function() {
      this.verifyFunction(P, 'init');
    });

    it('after instanced, should exist resolve function', function() {
      var instance = P.init();
      this.verifyFunction(instance, 'resolve');
    });

    it('after instanced, should exist reject function', function() {
      var instance = P.init();
      this.verifyFunction(instance, 'reject');
    });

    it('after instanced, should exist then function', function() {
      var instance = P.init();
      this.verifyFunction(instance, 'then');
    });

    it('should store the context passed by parameter', function() {
      var context = {'name': 'Evandro', 'year': 27};
      var instance = P.init(context);

      expect(instance.context).toBe(context);
    });
  });

  describe('then function', function() {
    beforeEach(function() {
      this.verifyCallback = function(onFulfilled, onRejected, type) {
        jasmine.Clock.useMock();
        var time = 100;

        var fnWithPromise = function() {
          var promise = P.init();

          setTimeout(function() {
            promise[type]();
          }, time);

          return promise;
        };

        fnWithPromise().then(onFulfilled, onRejected);
        jasmine.Clock.tick(time);

        var callback = (type === 'resolve' ? onFulfilled : onRejected);
        expect(callback).toHaveBeenCalled();
      };
    });

    it('should execute success callback', function() {
      var onFulfilled = jasmine.createSpy('onFulfilled');
      this.verifyCallback(onFulfilled, function(){}, 'resolve');
    });

    it('should execute error callback passed in then', function() {
      var onRejected = jasmine.createSpy('onRejected');
      this.verifyCallback(function(){}, onRejected, 'reject');
    });
  });

});