/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function () {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function () {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function () {
            expectSomething(allFeeds);
        });

        it('have urls defined', function () {
            allFeeds.forEach(feed => {
                expectSomething(feed.url);
            });
        });

        it('have names defined', function () {
            allFeeds.forEach(feed => {
                expectSomething(feed.name);
            });
        });
    });

    describe('The menu', function () {

        it('is hidden by default', function () {
            // expect($('.slide-menu').position().left).toBeLessThan(0);
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });

        it('slides when clicked', function () {
            $('.menu-icon-link').trigger('click');
            expect($('body').hasClass('menu-hidden')).toBe(false);
            $('.menu-icon-link').trigger('click');
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });
       
    });

    describe('Initial Entries', function () {
        
        beforeEach(function ( done) {
            $('.feed').empty();
            loadFeed(0, function () {
                done();
            });
        });
        
        it('are loaded', function ( ) {
            expect($('.feed').children().length).toBeGreaterThan(0);
        });

    });

    describe('New Feed Selection', function () {
        
        let oldContent;

        beforeEach(function ( done) {
            oldContent = $('.feed').text();
            //Assuming feed 0 is loaded by default 
            loadFeed(1, function () {
                done();
            });
        });
        
        it('changes the content', function ( ) {
            expect($('.feed').text()).not.toBe( oldContent);
        });

    });

    /**
     * Helper function.
     * Checks whether that the argument is defined, not null 
     * and not empty if it has a length.  
     */
    function expectSomething(thing) {
        expect(thing).toBeDefined();
        expect(thing).not.toBeNull();
        if (typeof thing !== 'undefined'
            && thing !== null
            && typeof thing.length !== 'undefined') {
            expect(thing.length).not.toBe(0);
        }
    }

}());
