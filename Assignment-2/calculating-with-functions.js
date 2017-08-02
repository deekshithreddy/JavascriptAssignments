function zero(expression) {
    return expression ? expression(0) : 0;
}

function one(expression) {
    return expression ? expression(1) : 1;
}

function two(expression) {
    return expression ? expression(2) : 2;
}

function three(expression) {
    return expression ? expression(3) : 3;
}

function four(expression) {
    return expression ? expression(4) : 4;
}

function five(expression) {
    return expression ? expression(5) : 5;
}

function six(expression) {
    return expression ? expression(6) : 6;
}

function seven(expression) {
    return expression ? expression(7) : 7;
}

function eight(expression) {
    return expression ? expression(8) : 8;
}

function nine(expression) {
    return expression ? expression(9) : 9;
}

function plus(rightValue) {
    return function (leftValue) {
        return leftValue + rightValue;
    }
}

function minus(rightValue) {
    return function (leftValue) {
        return leftValue - rightValue;
    }
}

function times(rightValue) {
    return function (leftValue) {
        return leftValue * rightValue;
    }
}

function dividedBy(rightValue) {
    return function (leftValue) {
        return leftValue / rightValue;
    }
}