#In MapMyRun, I extracted the coordinates from .gpx files.
#I had to do this in separate instances.
#Therefore, this is the code I used to combine datasets, saved for posterity.

coords1 <- read_csv("First+SecondSetOfCoordinates09202018.csv")

coords2 <- read_csv("thirdSetOfCoordsReal.csv")

coords3 <- read_csv("FourthSetOfCoordinates.csv")

coords4 <- read_csv("5thSetOfCoordinates.csv")

all_coords <- rbind(coords1, coords2, coords3, coords4)

write_csv(all_coords, "allCoordinates.csv")

write_csv(count_all_coords2, "countAllCoordinates.csv")