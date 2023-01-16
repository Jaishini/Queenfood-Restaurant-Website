import * as express from "express";
import * as cors from "cors";
import { sample_foods, sample_tags } from "./data";

const app = express();
app.use(cors({
    credentials:true,
    origin:["https://localhost:4200"]
}));

app.get("/api/foods", (_req,res) => {
    res.send(sample_foods);
})

app.use("/api/foods/search/:searchTerm", (_req,_res) => {
 const searchTerm = _req.params.searchTerm;
 const foods = sample_foods.filter( food => food.name.toLowerCase().includes(searchTerm.toLowerCase()));
 _res.send(foods);
})

app.get("/api/foods/tag", (_req,_res) => {
_res.send(sample_tags);
})
 
app.get("/api/foods/tag/:tagName", (_req,_res) => {
    const tagName = _req.params.tagName;
    const foods = sample_foods.filter(food => food.tags?.includes(tagName));
    _res.send(foods);
})

app.get("/api/foods/:foodId", (_req,_res) => {
    const foodId = _req.params.foodId;
    const food = sample_foods.find(food => food.id == foodId);
    _res.send(food);

})

const port = 5000;
app.listen(port, () => {
    console.log("Website served on https://localhost:" + port);
})




