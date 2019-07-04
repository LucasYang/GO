/** An overview on Go rules
 * 
 * 1. the board is emptyat the onset of the game (unless players agree to place a handicap)
 * 2. Black makes the first move, after which White and Black alternate
 * 3. A move consists of placing one stone of one's own color on an empty intersection on the board
 * 4. A player may pass their turn at any time
 * 5. A stone or solidly connected group of stones of one color is captured and removed from the board 
 *    when all the intersections directly adjacent to it are occupied by the enemy(capture of the enemy takes precedence over self-capture)
 * 6. No stone may be played so as to recreate a former board position
 * 7. Two consecutive passes end the game.
 * 8. A players area consists all the points the player has either occupied or surrounded
 * 9. The player with more area wins.
 */


//  A stone or solidly connected group of stones of one color is captured and removed from the board 
//  when all the intersections directly adjacent to it are occupied by the enemy
//  (capture of the enemy takes precedence over self-capture)
const CaptureStones = () => {
    
}