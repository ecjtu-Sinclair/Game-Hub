import useGames from "@/hooks/useGames";
import { SimpleGrid, Text } from "@chakra-ui/react";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainner from "./GameCardContainner";

const GameGrid = () => {
  const { data, error, isLoading } = useGames();
  const skeletons = [1, 2, 3, 4, 5, 6];

  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        column={{ sm: 1, md: 2, lg: 3, xl: 5 }}
        padding="10px"
        spacing={3}
      >
        {isLoading &&
          skeletons.map((skeleton) => (
            <GameCardContainner>
              <GameCardSkeleton key={skeleton} />
            </GameCardContainner>
          ))}
        {data.map((game) => (
          <GameCardContainner>
            <GameCard key={game.id} game={game}></GameCard>
          </GameCardContainner>
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
