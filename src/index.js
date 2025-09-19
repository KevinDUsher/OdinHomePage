import "./styles.css";
import cardGitIcon from "../images/gitIcon.png";
import cardNewTabIcon from "../images/newTabIcon.png";
import emailImage from "../images/emailIcon.jpg";
import phoneImage from "../images/phoneImage.png";
import cardImage1 from "../images/cardImage1.jpg";
import cardImage2 from "../images/cardImage2.jpg";
import cardImage3 from "../images/newTabIcon.png";
import cardImage4 from "../images/cardImage4.png";
import cardImage5 from "../images/cardImage5.jpg";
import cardImage6 from "../images/cardImage6.jpg";
import topImage from "../images/topImage.jpg";
import bottomImage from "../images/bottomImage.png";

function createElementClass(_element, _class){
    let el = document.createElement(_element);
    el.classList = _class;
    return el;
}

function setUpCard(imgSrc, projectLabel, text, anchorLink){
    let cardContainer = createElementClass("div", "cardContainer");
    let imgContainer = createElementClass("div", "cardImageContainer");
    let img = createElementClass("img", "cardImage");
    img.src = imgSrc;
    imgContainer.appendChild(img);
    let bottomCard = createElementClass("div", "cardBottom");
    let bottomTopCard = createElementClass("div", "bottomTopCard");
    let bottomTopH2Card = createElementClass("p", "bottomTopPCard");
    bottomTopH2Card.textContent = projectLabel;
    let iconDiv = createElementClass("div", "cardIconDiv");
    let bottomGitIcon = createElementClass("img", "cardIcons");
    bottomGitIcon.src = cardGitIcon;
    let bottomNewTabIcon = createElementClass("img", "cardIcons");
    bottomNewTabIcon.src = cardNewTabIcon;
    let anchorGit = createElementClass("a","cardAnchorGit");
    anchorGit.href = anchorLink;
    let anchorNewTab = createElementClass("a","cardAnchorGit");
    anchorNewTab.href = anchorLink;
    anchorNewTab.target = "_blank";
    anchorGit.appendChild(bottomGitIcon);
    anchorNewTab.appendChild(bottomNewTabIcon);
    iconDiv.appendChild(anchorGit);
    iconDiv.appendChild(anchorNewTab);
    let bottomArticle = createElementClass("p", "cardBottomArticle");
    bottomArticle.textContent = text;
    bottomTopCard.appendChild(bottomTopH2Card);
    bottomTopCard.appendChild(iconDiv);
    bottomCard.appendChild(bottomTopCard);
    bottomCard.appendChild(bottomArticle);
    cardContainer.appendChild(imgContainer);
    cardContainer.appendChild(bottomCard);
    return cardContainer;
}

function setUpTop(){
    let topContainer = createElementClass("div", "topContainer");
    let topLeftContainer = createElementClass("div", "topLeftContainer");
    let topImageContainer = createElementClass("div", "topImageContainer");
    let _topImage = createElementClass("img", "topImage");
    _topImage.src = topImage;
    topImageContainer.appendChild(_topImage);
    let topImageLabel = createElementClass("h2", "topImageLabel");
    topImageLabel.textContent = "Link – Hero of Hyrule";
    topLeftContainer.appendChild(topImageContainer);
    topLeftContainer.appendChild(topImageLabel);
    let topRightContainer = createElementClass("div", "topRightContainer");
    let topRightH2 = createElementClass("h2", "topRightH2");
    let topRightP = createElementClass("p", "topRightP");
    topRightP.textContent = "Link is the courageous, silent protagonist of The Legend of Zelda series. Chosen by destiny and guided by the Triforce of Courage, he travels across the lands of Hyrule and beyond to protect Princess Zelda and thwart the evil forces that threaten the realm—most often the dark lord Ganon. Armed with his iconic Master Sword and Hylian Shield, Link is known for his resourcefulness, bravery, and unshakable determination. Whether solving intricate puzzles in ancient temples, battling powerful monsters, or exploring vast open worlds, he embodies the spirit of heroism. Despite rarely speaking, his actions inspire allies and players alike, making him one of gaming’s most enduring and beloved heroes.";
    let topIconContainer = createElementClass("div", "topIconContainer");
    let topGitIcon = createElementClass("img", "topIcons");
    topGitIcon.src = cardGitIcon;
    let topNewTabIcon = createElementClass("img", "topIcons");
    topNewTabIcon.src = cardNewTabIcon;
    let anchorGit = createElementClass("a","topAnchorGit");
    anchorGit.href = "https://zelda.fandom.com/wiki/Link";
    let anchorNewTab = createElementClass("a","topAnchorGit");
    anchorNewTab.href = "https://zelda.fandom.com/wiki/Link";
    anchorNewTab.target = "_blank";
    anchorGit.appendChild(topGitIcon);
    anchorNewTab.appendChild(topNewTabIcon);
    topIconContainer.appendChild(anchorGit);
    topIconContainer.appendChild(anchorNewTab);
    topRightContainer.appendChild(topRightH2);
    topRightContainer.appendChild(topRightP);
    topRightContainer.appendChild(topIconContainer);
    topContainer.appendChild(topLeftContainer);
    topContainer.appendChild(topRightContainer);
    return topContainer;
}

function setUpBottom(){
    let bottomContainer = createElementClass("div", "bottomContainer");
    let bottomLeftContainer = createElementClass("div", "bottomLeftContainer");
    let bottomLeftH2 = createElementClass("h2", "bottomLeftH2");
    bottomLeftH2.textContent = "Summon the Hero";
    let bottomLeftP1 = createElementClass("p", "bottomLeftP");
    bottomLeftP1.textContent = "Send word if Hyrule is in need of a hero.";
    let bottomLeftP2 = createElementClass("p", "bottomLeftP");
    bottomLeftP2.textContent = "Kokiri Forest, Hyrule";
    let bottomPhoneDiv = createElementClass("div", "bottomPhoneDiv");
    let bottomPhoneImg = createElementClass("img" , "bottomArticleIcon");
    bottomPhoneImg.src = phoneImage;
    let bottomPhoneP = createElementClass("p" , "bottomLeftP");
    bottomPhoneP.textContent = "⬅️ ➡️ ➡️ A ⬅️ ➡️ ⬇️";
    bottomPhoneDiv.appendChild(bottomPhoneImg);
    bottomPhoneDiv.appendChild(bottomPhoneP);
    let bottomEmailDiv = createElementClass("div", "bottomEmailDiv");
    let bottomEmailImg = createElementClass("img", "bottomArticleIcon");
    bottomEmailImg.src = emailImage;
    let bottomEmailP = createElementClass("p", "bottomLeftP");
    bottomEmailP.textContent = "hero.of.time@hyrulemail.com";
    bottomEmailDiv.appendChild(bottomEmailImg);
    bottomEmailDiv.appendChild(bottomEmailP);
    let bottomIconDiv = createElementClass("div", "bottomIconDiv");
    let gitIcon = createElementClass("img", "bottomIcons");
    gitIcon.src = cardGitIcon;
    let newTabIcon = createElementClass("img", "bottomIcons");
    newTabIcon.src = cardNewTabIcon;
    let anchorGit = createElementClass("a","topAnchorGit");
    anchorGit.href = "https://zelda.fandom.com/wiki/Link%27s_House";
    let anchorNewTab = createElementClass("a","topAnchorGit");
    anchorNewTab.href = "https://zelda.fandom.com/wiki/Link%27s_House";
    anchorNewTab.target = "_blank";
    anchorGit.appendChild(gitIcon);
    anchorNewTab.appendChild(newTabIcon);
    bottomIconDiv.appendChild(anchorGit);
    bottomIconDiv.appendChild(anchorNewTab);
    bottomLeftContainer.appendChild(bottomLeftH2);
    bottomLeftContainer.appendChild(bottomLeftP1);
    bottomLeftContainer.appendChild(bottomLeftP2);
    bottomLeftContainer.appendChild(bottomPhoneDiv);
    bottomLeftContainer.appendChild(bottomEmailDiv);
    bottomLeftContainer.appendChild(bottomIconDiv);
    let bottomRightImageContainer = createElementClass("div", "bottomRightImageContainer");
    let bottomRightImage = createElementClass("img", "bottomRightImage");
    bottomRightImage.src = bottomImage;
    bottomRightImageContainer.appendChild(bottomRightImage);
    bottomContainer.appendChild(bottomLeftContainer);
    bottomContainer.appendChild(bottomRightImageContainer);
    return bottomContainer;
}

function setUpMiddle(){
    let middleContainer = createElementClass("div", "middleContainer");
    let middleLabel = createElementClass("h2", "middleLabel");
    middleContainer.appendChild(middleLabel);
    let middleCards = createElementClass("div", "middleCards");
    middleCards.appendChild(setUpCard(cardImage1, "Princess Zelda", "Zelda is the wise and courageous princess of Hyrule, often gifted with the Triforce of Wisdom.", "https://zelda.fandom.com/wiki/Princess_Zelda"));
    middleCards.appendChild(setUpCard(cardImage2, "Ganondorf Lord of Darkness", "Ganon, also known as Ganondorf in his human form, is the primary antagonist of The Legend of Zelda series and bearer of the Triforce of Power.", "https://zelda.fandom.com/wiki/Ganon"));
    middleCards.appendChild(setUpCard(cardImage3, "Triforce", "The Triforce is a sacred golden relic composed of three parts: Power, Wisdom, and Courage.", "https://zelda.fandom.com/wiki/Triforce"));
    middleCards.appendChild(setUpCard(cardImage4, "Midna, the Twilight Princess", "Midna, the Twilight Princess of the Twilight Realm, serves as both ally and guide to Link in The Legend of Zelda: Twilight Princess.", "https://zelda.fandom.com/wiki/Midna"));
    middleCards.appendChild(setUpCard(cardImage5, "Fairy Navi", "Navi, the helpful fairy companion in The Legend of Zelda: Ocarina of Time, serves as Link’s constant guide and advisor on his quest.", "https://zelda.fandom.com/wiki/Navi"));
    middleCards.appendChild(setUpCard(cardImage6, "Fi", "Fi, the spirit of the Goddess Sword in The Legend of Zelda: Skyward Sword, is Link’s analytical and ever-loyal guide.", "https://zelda.fandom.com/wiki/Fi"));
    middleContainer.appendChild(middleCards);
    return middleContainer;
}

function setUpPage(){
    let root = document.getElementById("root");
    root.appendChild(setUpTop());
    root.appendChild(setUpMiddle());
    root.appendChild(setUpBottom());
}

setUpPage();