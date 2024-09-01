import React, { useEffect, useState } from "react";
import Stack from "../../base components/LayoutComponents/Stack/Stack";
import Link from "../../base components/TypographyComponents/Link/Link";
import styled from "styled-components";
import {
  fetchCategories,
  Category,
} from "../../../utils/fetchCategories/fetchCategories";

const Separator = styled.span`
  color: inherit;
`;

interface CategoryListProps {
  onSelectCategory: (category: string | null) => void; // Update type to allow resetting
}

const CategoryList: React.FC<CategoryListProps> = ({ onSelectCategory }) => {
  const [categories, setCategories] = useState<Category[]>([]); // State to store fetched categories
  const [loading, setLoading] = useState<boolean>(true); // State to manage loading
  const [error, setError] = useState<string | null>(null); // State to manage errors

  // Fetch categories on component mount
  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedCategories = await fetchCategories();
        setCategories(fetchedCategories);
        setLoading(false);
      } catch (error) {
        setError("Failed to fetch categories.");
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading categories...</div>; // Show loading state
  }

  if (error) {
    return <div>{error}</div>; // Show error state
  }

  return (
    <Stack direction="horizontal" gap="SpacingSpacing2">
      {/* Add "All" or "Work" link to reset categories */}
      <span
        onClick={(e) => {
          e.preventDefault();
          onSelectCategory(null); // Reset to show all works
        }}
        style={{ cursor: "pointer" }}
      >
        <Link href="#" color="dark">
          All
        </Link>
      </span>
      <Separator>✦</Separator>

      {categories.map((category, index) => (
        <React.Fragment key={category.name}>
          {/* Prevent default behavior by calling preventDefault on click */}
          <span
            onClick={(e) => {
              e.preventDefault();
              onSelectCategory(category.name); // Call onSelectCategory when clicked
            }}
            style={{ cursor: "pointer" }}
          >
            <Link href="#" color="dark">
              {category.name}
            </Link>
          </span>
          {index < categories.length - 1 && <Separator>✦</Separator>}
        </React.Fragment>
      ))}
    </Stack>
  );
};

export default CategoryList;
