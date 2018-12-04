// Add animation behavior to carousel content elements
function getSwipeDirection(moveVector) {
    swipeDirection = null;

    if (moveVector.x > 0) {
        swipeDirection = 'right';
    } else {
        swipeDirection = 'left';
    }

    return swipeDirection;
}

// Detect swipe direction
current_index = null;
swipe_direction = null;
animation_class_add = null;
animation_class_remove = null;

flkty = new Flickity('.carousel');

flkty.on('dragMove', function(event, pointer, moveVector) {
    current_index = flkty.selectedIndex;
    swipe_direction = getSwipeDirection(moveVector);
});

// Take action based on direction of swipe/drag
flkty.on('dragEnd', function(touchend) {
    if (flkty.selectedIndex !== current_index) {
        // Moved to a new card
        if (swipe_direction === 'left') {
            animation_class_remove = 'slide-in-left';
            animation_class_add = 'slide-in-right';
        } else {
            animation_class_remove = 'slide-in-right';
            animation_class_add = 'slide-in-left';
        }
        
        var elems = document.getElementsByClassName("animate");

        for (i = 0; i < elems.length; i++) {
            elems[i].classList.remove(animation_class_remove);
            elems[i].classList.add(animation_class_add);
        }
    }
});