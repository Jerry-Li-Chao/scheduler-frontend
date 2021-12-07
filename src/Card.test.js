import React from "react";
import { render, fireEvent, getByTestId } from "@testing-library/react";
import Card from "./Card";
import { Link } from "react-router-dom";


let initColor = "coral";
let post = {id: "5", taskname: "this task name", description: "my description"};
let ddl = "deadline";

test("test edit button content", () => {
    const { getByTestId } = render(<Card
        key={post.id}
        title={post.taskname}
        onClick={(appendedTitle, updatedColor) => {
            post.taskname = appendedTitle;
            initColor = updatedColor;
        }}
        emptyColor={initColor}
        selectedColor="lightgreen"
        renderCard={(onClick) => {
            return (<>
                <button
                    type="button"
                    className="card btn"
                    style={{
                    width: "18rem",
                    backgroundColor: initColor
                    }}
                    onClick={onClick}
                >
                    <div className="card-body">
                    <h5 className="card-title">{post.taskname}</h5>
                    <p className="card-text">
                        {post.description}
                    </p>
                    <p className="card-text">
                        DDL: {ddl}
                    </p>
                    </div>
                </button>
            
                <button 
                    data-testid="edit"
                    type="button"
                    className="btn btn-secondary">
                        Edit/Delete/Favorite {post.taskname}
                </button>
            
            </>
        );
        }}
        ></Card>);

        expect(getByTestId("edit").innerHTML).toBe("Edit/Delete/Favorite this task name");
    
})

test("test post content", () => {
    const { getByTestId } = render(<Card
        key={post.id}
        title={post.taskname}
        onClick={(appendedTitle, updatedColor) => {
            post.taskname = appendedTitle;
            initColor = updatedColor;
        }}
        emptyColor={initColor}
        selectedColor="lightgreen"
        renderCard={(onClick) => {
            return (<>
                <button
                    type="button"
                    className="card btn"
                    style={{
                    width: "18rem",
                    backgroundColor: initColor
                    }}
                    onClick={onClick}
                >
                    <div className="card-body">
                    <h5 className="card-title" data-testid="edit">{post.taskname}</h5>
                    <p className="card-text">
                        {post.description}
                    </p>
                    <p className="card-text">
                        DDL: {ddl}
                    </p>
                    </div>
                </button>
            
                <button 
                    type="button"
                    className="btn btn-secondary">
                        Edit/Delete/Favorite {post.taskname}
                </button>
            
            </>
        );
        }}
        ></Card>);

        expect(getByTestId("edit").innerHTML).toBe("this task name");
})

test("test deadline correctness", () => {
    const { getByTestId } = render(<Card
        key={post.id}
        title={post.taskname}
        onClick={(appendedTitle, updatedColor) => {
            post.taskname = appendedTitle;
            initColor = updatedColor;
        }}
        emptyColor={initColor}
        selectedColor="lightgreen"
        renderCard={(onClick) => {
            return (<>
                <button
                    type="button"
                    className="card btn"
                    style={{
                    width: "18rem",
                    backgroundColor: initColor
                    }}
                    onClick={onClick}
                >
                    <div className="card-body">
                    <h5 className="card-title" >{post.taskname}</h5>
                    <p className="card-text">
                        {post.description}
                    </p>
                    <p className="card-text" data-testid="edit">
                        DDL: {ddl}
                    </p>
                    </div>
                </button>
            
                <button 
                    type="button"
                    className="btn btn-secondary">
                        Edit/Delete/Favorite {post.taskname}
                </button>
            
            </>
        );
        }}
        ></Card>);

        expect(getByTestId("edit").innerHTML).toBe("DDL: deadline");
})

test("test description correctness", () => {
    const { getByTestId } = render(<Card
        key={post.id}
        title={post.taskname}
        onClick={(appendedTitle, updatedColor) => {
            post.taskname = appendedTitle;
            initColor = updatedColor;
        }}
        emptyColor={initColor}
        selectedColor="lightgreen"
        renderCard={(onClick) => {
            return (<>
                <button
                    type="button"
                    className="card btn"
                    style={{
                    width: "18rem",
                    backgroundColor: initColor
                    }}
                    onClick={onClick}
                >
                    <div className="card-body">
                    <h5 className="card-title" >{post.taskname}</h5>
                    <p className="card-text" data-testid="edit">
                        {post.description}
                    </p>
                    <p className="card-text">
                        DDL: {ddl}
                    </p>
                    </div>
                </button>
            
                <button 
                    type="button"
                    className="btn btn-secondary">
                        Edit/Delete/Favorite {post.taskname}
                </button>
            
            </>
        );
        }}
        ></Card>);

        expect(getByTestId("edit").innerHTML).toBe("my description");
})

test("test button type correctness", () => {
    const { getByTestId } = render(<Card
        key={post.id}
        title={post.taskname}
        onClick={(appendedTitle, updatedColor) => {
            post.taskname = appendedTitle;
            initColor = updatedColor;
        }}
        emptyColor={initColor}
        selectedColor="lightgreen"
        renderCard={(onClick) => {
            return (<>
                <button
                    
                    type="button"
                    className="card btn"
                    style={{
                    width: "18rem",
                    backgroundColor: initColor
                    }}
                    onClick={onClick}
                >
                    <div className="card-body">
                    <h5 className="card-title" >{post.taskname}</h5>
                    <p className="card-text" >
                        {post.description}
                    </p>
                    <p className="card-text">
                        DDL: {ddl}
                    </p>
                    </div>
                </button>
            
                <button 
                    data-testid="edit"
                    type="button"
                    className="btn btn-secondary">
                        Edit/Delete/Favorite {post.taskname}
                </button>
            
            </>
        );
        }}
        ></Card>);

        // const button = getByTestId("edit");
        // fireEvent.click(button);

        expect(getByTestId("edit").type).toBe("button");
})

test("test task type correctness", () => {
    const { getByTestId } = render(<Card
        key={post.id}
        title={post.taskname}
        onClick={(appendedTitle, updatedColor) => {
            post.taskname = appendedTitle;
            initColor = updatedColor;
        }}
        emptyColor={initColor}
        selectedColor="lightgreen"
        renderCard={(onClick) => {
            return (<>
                <button
                    data-testid="edit"
                    type="button"
                    className="card btn"
                    style={{
                    width: "18rem",
                    backgroundColor: initColor
                    }}
                    onClick={onClick}
                >
                    <div className="card-body">
                    <h5 className="card-title" >{post.taskname}</h5>
                    <p className="card-text" >
                        {post.description}
                    </p>
                    <p className="card-text">
                        DDL: {ddl}
                    </p>
                    </div>
                </button>
            
                <button 
                    type="button"
                    className="btn btn-secondary">
                        Edit/Delete/Favorite {post.taskname}
                </button>
            
            </>
        );
        }}
        ></Card>);

        // const button = getByTestId("edit");
        // fireEvent.click(button);

        expect(getByTestId("edit").type).toBe("button");
})

test("test button type correctness", () => {
    const { getByTestId } = render(<Card
        key={post.id}
        title={post.taskname}
        onClick={(appendedTitle, updatedColor) => {
            post.taskname = appendedTitle;
            initColor = updatedColor;
        }}
        emptyColor={initColor}
        selectedColor="lightgreen"
        renderCard={(onClick) => {
            return (<>
                <button
                    
                    type="button"
                    className="card btn"
                    style={{
                    width: "18rem",
                    backgroundColor: initColor
                    }}
                    onClick={onClick}
                >
                    <div className="card-body">
                    <h5 className="card-title" >{post.taskname}</h5>
                    <p className="card-text" >
                        {post.description}
                    </p>
                    <p className="card-text">
                        DDL: {ddl}
                    </p>
                    </div>
                </button>
            
                <button 
                    data-testid="edit"
                    type="button"
                    className="btn btn-secondary">
                        Edit/Delete/Favorite {post.taskname}
                </button>
            
            </>
        );
        }}
        ></Card>);

        // const button = getByTestId("edit");
        // fireEvent.click(button);

        expect(getByTestId("edit").type).toBe("button");
})

test("test appear lightgreen after click", () => {
    const { getByTestId } = render(<Card
        key={post.id}
        title={post.taskname}
        onClick={(appendedTitle, updatedColor) => {
            post.taskname = appendedTitle;
            initColor = updatedColor;
        }}
        emptyColor={initColor}
        selectedColor="lightgreen"
        renderCard={(onClick) => {
            return (<>
                <button
                    data-testid="edit"
                    type="button"
                    className="card btn"
                    style={{
                    width: "18rem",
                    backgroundColor: initColor
                    }}
                    onClick={onClick}
                >
                    <div className="card-body">
                    <h5 className="card-title" >{post.taskname}</h5>
                    <p className="card-text" >
                        {post.description}
                    </p>
                    <p className="card-text">
                        DDL: {ddl}
                    </p>
                    </div>
                </button>
            
                <button 
                    type="button"
                    className="btn btn-secondary">
                        Edit/Delete/Favorite {post.taskname}
                </button>
            
            </>
        );
        }}
        ></Card>);

        const thebutton = getByTestId("edit");
        fireEvent.click(thebutton);

        expect(thebutton.style.backgroundColor).toBe("lightgreen");
})

test("test style width 18rem", () => {
    const { getByTestId } = render(<Card
        key={post.id}
        title={post.taskname}
        onClick={(appendedTitle, updatedColor) => {
            post.taskname = appendedTitle;
            initColor = updatedColor;
        }}
        emptyColor={initColor}
        selectedColor="lightgreen"
        renderCard={(onClick) => {
            return (<>
                <button
                    data-testid="edit"
                    type="button"
                    className="card btn"
                    style={{
                    width: "18rem",
                    backgroundColor: initColor
                    }}
                    onClick={onClick}
                >
                    <div className="card-body">
                    <h5 className="card-title" >{post.taskname}</h5>
                    <p className="card-text" >
                        {post.description}
                    </p>
                    <p className="card-text">
                        DDL: {ddl}
                    </p>
                    </div>
                </button>
            
                <button 
                    type="button"
                    className="btn btn-secondary">
                        Edit/Delete/Favorite {post.taskname}
                </button>
            
            </>
        );
        }}
        ></Card>);


        expect(getByTestId("edit").style.width).toBe("18rem");
})

test("test button className", () => {
    const { getByTestId } = render(
    <Card
        
        key={post.id}
        title={post.taskname}
        onClick={(appendedTitle, updatedColor) => {
            post.taskname = appendedTitle;
            initColor = updatedColor;
        }}
        emptyColor={initColor}
        selectedColor="lightgreen"
        renderCard={(onClick) => {
            return (<>
                <button
                data-testid="edit"
                    type="button"
                    className="card btn"
                    style={{
                    width: "18rem",
                    backgroundColor: initColor
                    }}
                    onClick={onClick}
                >
                    <div className="card-body">
                    <h5 className="card-title" >{post.taskname}</h5>
                    <p className="card-text" >
                        {post.description}
                    </p>
                    <p className="card-text">
                        DDL: {ddl}
                    </p>
                    </div>
                </button>
            
                <button 
                    type="button"
                    className="btn btn-secondary">
                        Edit/Delete/Favorite {post.taskname}
                </button>
            
            </>
        );
        }}
        ></Card>);

        const button2 = getByTestId("edit");
        fireEvent.click(button2);


        expect(getByTestId("edit").className).toBe("card btn");
})