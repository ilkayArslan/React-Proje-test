import Header from "./Header";
import EmojiResults from "./EmojiResults";
import EmojiResultsRow from "./EmojiResultRow";
import filterEmoji from "./filterEmoji";
import { render, screen } from "@testing-library/react";
import SearchInput from "./SearchInput";

describe("Project Test", () => {
    let headText, searchArea, afterFilter, copyEvent, headerDOM;

    test("header Front img test", () => {
        render(<Header />);

        const HeadFrontImg = screen.getByAltText("Frontimg")
        expect(HeadFrontImg).toBeInTheDocument();

    })
    test("header Text Test", () => {
        render(<Header />);
        const HeadText = screen.getByText(/Emoji Search/i)
        expect(HeadText).toBeInTheDocument();
    })
    test("head Back İmage Render Test", () => {
        render(<Header />);
        const HeadBackImg = screen.getByAltText("BackImg");
        expect(HeadBackImg).toBeInTheDocument();
    })
    test("emoji render test", () => {
        const emojies = filterEmoji("", 20)
        render(<EmojiResults emojiData={emojies} />)
        //EmojiResultRow => I add title="Emojies" prop in Div. 
        const emTitle = screen.getAllByTitle("Emojies")
        expect(emTitle.length).toEqual(20)

    })
    test("Filter Emoji Render Test", () => {
        const filteredEm = filterEmoji("Smil", 20)
        let filteredEmLength = filteredEm.length;
        render(<EmojiResults emojiData={filteredEm} />)
        const emTitle = screen.getAllByTitle("Emojies")
        expect(emTitle.length).toEqual(filteredEmLength)
    })
    test("data-clipboard-text attribute Control", () => {
        render(<EmojiResults emojiData={filterEmoji("", 20)} />)
        const emTitle = screen.getAllByTitle("Emojies")
        expect(emTitle[0]).toHaveAttribute("data-clipboard-text")
    })


})