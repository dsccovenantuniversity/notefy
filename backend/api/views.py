from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .models import note
from .serializers import NoteSerializer

# Create your views here.

@api_view(['GET'])
def getroutes(request):

    routes = [
        {
            'Endpoint': '/notes/',
            'method': 'GET',
            'body': None,
            'description': 'Returns an array of notes'
        },
        {
            'Endpoint': '/notes/id',
            'method': 'GET',
            'body': None,
            'description': 'Returns a single note object'
        },
        {
            'Endpoint': '/notes/create/',
            'method': 'POST',
            'body': {'body': ""},
            'description': 'Creates new note with data sent in post request'
        },
        {
            'Endpoint': '/notes/id/update/',
            'method': 'PUT',
            'body': {'body': ""},
            'description': 'Creates an existing note with data sent in post request'
        },
        {
            'Endpoint': '/notes/id/delete/',
            'method': 'DELETE',
            'body': None,
            'description': 'Deletes and exiting note'
        },
    ]

    return Response(routes)


@api_view(['GET'])  #This is a decorator, which is a function that takes in a function and returns a function.
def getnotes(request):  #This is the function that is being decorated.
    notes = note.objects.all().order_by('-updated_at')  #Getting the notes from the database (models.py) and ordering them by the updated date.
    serializer = NoteSerializer(notes, many=True)  #Serializing the notes. This means giving it IDs that increment e.g #1
    return Response(serializer.data)    #Returning the serialized data


@api_view(['GET'])  #This is a GET request
def get_single_note(request, pk):   #This is the primary key
    single_note = note.objects.get(id=pk)  #Getting the desired note from the database (models.py)
    serializer = NoteSerializer(single_note, many=False) #I want to get only a single note
    return Response(serializer.data)    #Returning the serialized data


@api_view(['PUT'])  #This is a PUT request, because we are updating an existing note
def update_note(request, pk):   #This is the primary key
    note = note.objects.get(id=pk)  #Getting the desired note from the database (models.py)
    serializer = NoteSerializer(note, data=request.data)    #This is the data that we are sending in the request
    if serializer.is_valid():   #If the data is valid, then we can update the note
        serializer.save()   #Saving the note
        return Response(serializer.data)    #Returning the serialized data
    return Response(serializer.errors, status=400)  #Returning the errors and a status code of 400, which means bad request (400 is a bad request)


@api_view(['POST'])  #This is a POST request, because we are creating a new note
def create_note(request):   #This is the primary key
    data = request.data   #Getting the data from the request
    note = note.objects.create(body=data['body'])  #Creating a new note in the database (models.py)
    serializer = NoteSerializer(data=data)    #This is the data that we are sending in the request
    return Response(serializer.data)    #Returning the serialized data


@api_view(['DELETE'])  #This is a DELETE request, because we are deleting an existing note
def delete_note(request, pk):   #This is the primary key
    note = note.objects.get(id=pk)  #Getting the desired note from the database (models.py)
    note.delete()   #Deleting the note
    return Response("Note deleted successfully")    #Returning the serialized data
