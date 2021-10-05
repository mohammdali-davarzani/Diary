from .models import * 
from .serializers import * 
from rest_framework.response import Response
from rest_framework.decorators import api_view
from django.shortcuts import get_object_or_404

# Create your views here.

@api_view(['GET'])
def getRoutes(request):

    routes = [
        {
            'Endpoint': '/memoirs/',
            'method': 'GET',
            'body': None,
            'description': 'Returns an array of memoirs',
        },
        {
            'Endpoint': '/memoirs/id',
            'method': 'GET',
            'body': None,
            'description': 'Returns a single memoir'
        },
        {
            'Endpoint': '/memoirs/create/',
            'method': 'POST',
            'body': {'body': ""},
            'description': 'Creates new memoir wiht data sent in post request'
        },
        {
            'Endpoint': '/memoirs/id/update/',
            'method': 'PUT', 
            'body': {'body': ""},
            'description': 'Update an existing memoir with data sent in post request'        
        },
        {
            'Endpoint': '/memoirs/id/delete/',
            'method': 'DELETE',
            'body': None,
            'description': 'Deletes and exiting memoir'
        },
    ]

    return Response(routes)


@api_view(['GET'])
def getMemoirs(request):
    memoirs = Memoir.objects.all().order_by('-created')
    serializer = MemoirsSerializers(memoirs, many=True)
    return Response(serializer.data) 



@api_view(['GET'])
def getMemoir(request, pk):
    memoir = get_object_or_404(Memoir, id=pk)
    serializer = MemoirsSerializers(memoir)
    return Response(serializer.data)


@api_view(['POST'])
def createMemoir(request):
    data = request.data
    memoir = Memoir.objects.create(
        body=data['body']
    )
    serializer = MemoirsSerializers(memoir)
    return Response(serializer.data)



@api_view(["PUT"])
def updateMemoir(request, pk):
    data = request.data
    memoir = get_object_or_404(Memoir, id=pk)
    serializer = MemoirsSerializers(instance=memoir, data=data)

    if serializer.is_valid():
        serializer.save()

    return Response(serializer.data)



@api_view(["DELETE"])
def deleteMemoir(request, pk):
    memoir = get_object_or_404(Memoir, id=pk)
    memoir.delete()
    return Response("Memoir was deleted")