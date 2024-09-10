import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import Container from "../../base components/Container/Container";
import ImagesLayout, {
  ImagesLayoutProps,
} from "../../media components/ImagesLayout/ImagesLayout";
import { fetchWork, Work } from "../../../utils/fetchWork/fetchWork";
import CategoryList from "../Category/Category";
import Flex from "../../base components/LayoutComponents/Flex/Flex";
import Heading from "../../base components/TypographyComponents/Heading/Heading";

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: scale(0.95) translateY(20px);
  }
  to {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
  to {
    opacity: 0;
    transform: scale(0.95) translateY(20px);
  }
`;

const TransitionContainer = styled.div<{ isVisible: boolean }>`
  animation: ${(props) => (props.isVisible ? fadeIn : fadeOut)} 0.3s ease-in-out
    forwards;
  transition: all 0.3s ease-in-out;
`;

const Thumbnail = styled.img`
  cursor: pointer;
  transition: transform 0.3s ease-in-out;
  &:hover {
    transform: scale(1.05);
  }
`;

const FullWidthThumbnailContainer = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: relative;
`;

const FullWidthThumbnail = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  cursor: pointer;
  transition: transform 0.5s ease-in-out;
  &:hover {
    transform: scale(1.02);
  }
`;

const WorkGrid: React.FC = () => {
  const [works, setWorks] = useState<Work[]>([]);
  const [filteredWorks, setFilteredWorks] = useState<Work[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [isVisible, setIsVisible] = useState<boolean>(true);

  const navigate = useNavigate();

  useEffect(() => {
    const loadWorks = async () => {
      try {
        const worksData = await fetchWork();
        setWorks(worksData);
        setFilteredWorks(worksData);
      } catch (error) {
        setError("Failed to fetch works");
        console.error("Error fetching works:", error);
      } finally {
        setLoading(false);
      }
    };

    loadWorks();
  }, []);

  useEffect(() => {
    setIsVisible(false);
    setTimeout(() => {
      if (selectedCategory) {
        setFilteredWorks(
          works.filter((work) => work.category.name === selectedCategory)
        );
      } else {
        setFilteredWorks(works);
      }
      setIsVisible(true);
    }, 300);
  }, [selectedCategory, works]);

  const handleCategorySelect = (category: string | null) => {
    setSelectedCategory(category);
  };

  const handleThumbnailClick = (id: string) => {
    navigate(`/work/${id}`);
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  let layoutVariant: ImagesLayoutProps["variant"];
  let fullWidthHeight = "auto";

  switch (filteredWorks.length) {
    case 6:
      layoutVariant = "variant1";
      break;
    case 5:
      layoutVariant = "variant7";
      break;
    case 4:
      layoutVariant = "variant3";
      break;
    case 3:
      layoutVariant = "variant6";
      break;
    case 2:
      layoutVariant = "variant5";
      break;
    case 1:
      layoutVariant = "fullWidth";
      fullWidthHeight = "75vh";
      break;
    default:
      layoutVariant = "variant1";
      break;
  }

  return (
    <Container>
      <Container
        paddingLeftRight="SpacingSpacing6"
        paddingTopBottom="SpacingSpacing2"
      >
        <Flex direction="row" xAlign="space-between" yAlign="center">
          <Heading level="h4" color="dark" align="center">
            work
          </Heading>
          <CategoryList onSelectCategory={handleCategorySelect} />
        </Flex>
      </Container>

      <TransitionContainer isVisible={isVisible}>
        <ImagesLayout
          paddingTopBottom="SpacingSpacing0"
          variant={layoutVariant}
          gridHeight={layoutVariant === "fullWidth" ? "100vh" : "75vh"}
          fullWidthHeight={fullWidthHeight}
        >
          {filteredWorks.map((work) =>
            layoutVariant === "fullWidth" ? (
              <FullWidthThumbnailContainer key={work.id}>
                <FullWidthThumbnail
                  src={work.thumbnail.url}
                  alt={work.title}
                  onClick={() => handleThumbnailClick(work.id)}
                />
              </FullWidthThumbnailContainer>
            ) : (
              <Thumbnail
                key={work.id}
                src={work.thumbnail.url}
                alt={work.title}
                onClick={() => handleThumbnailClick(work.id)}
              />
            )
          )}
        </ImagesLayout>
      </TransitionContainer>
    </Container>
  );
};

export default WorkGrid;
