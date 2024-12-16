import useGames, { Platform } from "@/hooks/useGames";
import { SimpleGrid, Text } from "@chakra-ui/react";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainner from "./GameCardContainner";
import { Genre } from "@/hooks/useGenres";
import { GameQuery } from "@/App";

interface Props {
  gameQuery: GameQuery;
}

const GameGrid = ({gameQuery}: Props) => {
  const { data, error, isLoading } = useGames(gameQuery);
  const skeletons = [1, 2, 3, 4, 5, 6];

  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        column={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        padding="10px"
        spacing={6}
      >
        {isLoading &&
          skeletons.map((skeleton) => (
            <GameCardContainner key={skeleton}>
              <GameCardSkeleton />
            </GameCardContainner>
          ))}
        {data.map((game) => (
          <GameCardContainner key={game.id}>
            <GameCard game={game}></GameCard>
          </GameCardContainner>
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
