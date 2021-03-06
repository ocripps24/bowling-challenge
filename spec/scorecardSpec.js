describe('Bowling ScoreCard', function() {

  var scorecard;

  beforeEach(function() {
    scorecard = new ScoreCard();
  });

  it('frames are empty at game start', function() {
    expect(scorecard.frames()).toEqual([]);
  });

  it('starts with a score of 0', function() {
    expect(scorecard._totalScore).toEqual(0);
  });

  describe('Scoring a simple game - no bonuses', function() {
    it('user can roll a gutter ball', function() {
      rollHelper(0, 20);
      expect(scorecard.score()).toEqual(0);
    });

    it('user can roll a game of 1s', function() {
      rollHelper(1, 20);
      expect(scorecard.score()).toEqual(20);
    });
  });

  describe('Scoring a game with Spares', function() {
    it('user can score one spare in a game', function() {
      scorecard.roll(5);
      scorecard.roll(5);
      scorecard.roll(1);
      rollHelper(0, 17);
      expect(scorecard.score()).toEqual(12);
    });

    it('user can score two spares in a game', function() {
      scorecard.roll(6);
      scorecard.roll(4);
      scorecard.roll(1);
      scorecard.roll(0);
      scorecard.roll(6);
      scorecard.roll(4);
      scorecard.roll(1);
      scorecard.roll(0);
      rollHelper(0, 12);
      expect(scorecard.score()).toEqual(24);
    });
  });

  describe('Scoring a game containing strikes', function() {
    it('user can score one strike in a game', function() {
      scorecard.roll(10);
      scorecard.roll(1);
      scorecard.roll(2);
      rollHelper(0, 16);
      expect(scorecard.score()).toEqual(16);
    });

    // it('user can score two strikes in a game', function() {
    //
    // });
  });

  var rollHelper = function (pins, rolls) {
    for (var i = 0; i < rolls; i++) {
      scorecard.roll(pins);
    }
  };

});
