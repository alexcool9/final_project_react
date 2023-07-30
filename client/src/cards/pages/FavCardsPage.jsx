import { useCallback } from "react";
import useCards from "./../hooks/useCards";
import Container from "@mui/material/Container";
import PageHeader from "../../components/PageHeader";
import { useEffect } from "react";
import CardsFeedback from "../components/CardsFeedback";

const FavCardsPage = () => {
    const { value = {}, ...rest } = useCards();
    console.log('FavCards - value', value.error ? value.error.message : "");
    const { isPending = false, error = { message: '' }, cards = [] } = value;
    console.log('value -error', error)
    const { message: errorMessage = '' } = error || {};
    const { handleDeleteCard, handleGetFavCards } = rest;

    debugger;

    useEffect(() => {
        handleGetFavCards();
    }, []);


    const onDeleteCard = useCallback(async (cardId) => {
        await handleDeleteCard(cardId);
        await handleGetFavCards();
    }, [handleDeleteCard]);

    const changeLikeStatus = useCallback(async () => {
        await handleGetFavCards();
    }, []);


    return (
        <Container>
            <PageHeader
                title="Favorite Cards Page"
                subtitle="Here you can find all your favorite business cards"
            />

            <CardsFeedback
                isPending={isPending}
                error={errorMessage}
                cards={cards}
                onDelete={onDeleteCard}
                onLike={changeLikeStatus}
            />
        </Container>
    )
};

export default FavCardsPage;