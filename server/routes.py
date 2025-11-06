"""
API routes for the application
"""

from fastapi import APIRouter, HTTPException
from pydantic import BaseModel
from datetime import datetime
import random

router = APIRouter()


class MessageResponse(BaseModel):
    message: str
    timestamp: str
    success: bool


class CalculationRequest(BaseModel):
    a: float
    b: float
    operation: str


class CalculationResponse(BaseModel):
    result: float
    operation: str
    timestamp: str


@router.get("/checkserver", response_model=MessageResponse)
async def check_server():
    """
    Health check endpoint to verify server is running
    """
    return MessageResponse(
        message="Python FastAPI server is running successfully! 🚀",
        timestamp=datetime.now().isoformat(),
        success=True,
    )


@router.get("/api/status", response_model=MessageResponse)
async def get_status():
    """
    Get detailed server status
    """
    return MessageResponse(
        message="Server is healthy and ready to process requests",
        timestamp=datetime.now().isoformat(),
        success=True,
    )


@router.post("/api/calculate", response_model=CalculationResponse)
async def calculate(request: CalculationRequest):
    """
    Perform basic arithmetic operations

    Operations: add, subtract, multiply, divide
    """
    operations = {
        "add": lambda a, b: a + b,
        "subtract": lambda a, b: a - b,
        "multiply": lambda a, b: a * b,
        "divide": lambda a, b: a / b if b != 0 else None,
    }

    if request.operation not in operations:
        raise HTTPException(
            status_code=400,
            detail=f"Invalid operation. Must be one of: {', '.join(operations.keys())}",
        )

    result = operations[request.operation](request.a, request.b)

    if result is None:
        raise HTTPException(status_code=400, detail="Cannot divide by zero")

    return CalculationResponse(
        result=result, operation=request.operation, timestamp=datetime.now().isoformat()
    )


@router.get("/api/random", response_model=dict)
async def get_random_number(min: int = 1, max: int = 100):
    """
    Generate a random number within a range

    Query params:
    - min: minimum value (default: 1)
    - max: maximum value (default: 100)
    """
    if min >= max:
        raise HTTPException(status_code=400, detail="min must be less than max")

    return {
        "number": random.randint(min, max),
        "min": min,
        "max": max,
        "timestamp": datetime.now().isoformat(),
    }
