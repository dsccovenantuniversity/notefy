from django.urls import path
from . import views

urlpatterns = [
    path('', views.getroutes, name='getroutes'),    #Getting and displaying all the routes. This is the default page for the project. May or may not be subject to change
    path('notes/', views.getnotes, name='getnotes'),    #Getting and displaying all the notes athat have been added to the database.
    path('notes/create/', views.create_note, name='createnote'),    #Creating a new note
    path('notes/<str:pk>/update/', views.update_note, name='updatenote'),    #Updating an existing note
    path('notes/<str:pk>/', views.get_single_note, name='getnote'),     #Getting the single note, using the primary key (pk) as a part of the url, so that it would go staight to the single note. We use the 'str:' thingy because we want it to be a string attached to the url because I don't think numbers work
    path('notes/<str:pk>/delete/', views.delete_note, name='deletenote'),    #Deleting an existing note
]

#Making it an API, not necessarily a RESTful API yet, because there are some certain